$filePath = 'c:\Users\AKSHARA T K\OneDrive\Desktop\UFS\cts_new\cts_kerala_student_frontend1\src\app\pages\Student\Student.component.html'
$raw = [System.IO.File]::ReadAllText($filePath)

# Step 1: Replace the commented View Result button with an active one
$commentedBtn = '<!-- <button style="background-color: green;" *ngIf="Subject.Exam_Attended_Status==2 && Subject.Online_Exam_Status==1"  mat-raised-button type="submit" class="other-button-style btnflot pull-right mt-0" id="View_Result">' + "`r`n" + '                                    View Result</button> -->'

$activeBtn = '<button style="background-color: green;" *ngIf="Subject1.Exam_Attended_Status==2 && Subject1.Online_Exam_Status==1"  mat-raised-button type="submit" class="other-button-style btnflot pull-right mt-0" id="View_Result" (click)="View_Exam_Details(Subject1)">' + "`r`n" + '                                    View Result</button>'

if ($raw.Contains($commentedBtn)) {
    $raw = $raw.Replace($commentedBtn, $activeBtn)
    Write-Host "SUCCESS: Replaced commented View Result button."
} else {
    Write-Host "FAIL: Could not find commentedBtn. Checking raw..."
    $idx = $raw.IndexOf('<!-- <button style="background-color: green;" *ngIf="Subject.Exam_Attended_Status==2')
    Write-Host "Index of commented btn: $idx"
    # Extract 600 chars around it
    $snippet = $raw.Substring($idx, 300)
    Write-Host "Snippet bytes:"
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($snippet)
    Write-Host ($bytes -join ',')
}

# Step 2: Find end of the table </div> section and inject exam details view
# The target is: after </table> + two </div> closings in Exam_Tab_View
# We'll look for the unique pattern </table> near </div></div></div>
$tableEnd = "</table>                                        " + "`r`n" + "                        </div>                                        " + "`r`n" + "                        </div>" + "`r`n" + "                        </div>" + "`r`n" + "                        </div>                        " + "`r`n" + "                        <!-- </div>                         -->"

if ($raw.Contains($tableEnd)) {
    Write-Host "Found tableEnd pattern!"
} else {
    Write-Host "tableEnd NOT found. Searching for unique section..."
    $idx2 = $raw.IndexOf('<!-- </div>                         -->')
    Write-Host "Found closing comment at: $idx2"
    $raw.Substring($idx2 - 400, 600)
}

$examDetailsBlock = @"

                        <!-- Exam Details View Panel -->
                        <div *ngIf="Exam_Details_Hidden" style="padding: 10px 0;">
                            <div class="row mb-3 align-items-center">
                                <div class="col-md-8">
                                    <h4 style="color: #512DA8; font-weight: 700;">
                                        Result — {{Selected_Exam?.Subject_Name}}
                                    </h4>
                                    <p style="font-size: 14px; color: #555; margin-bottom: 0;">
                                        Score: <strong>{{Selected_Exam?.Mark_Obtained}}</strong>
                                    </p>
                                </div>
                                <div class="col-md-4 text-right">
                                    <button class="btn btn-sm btn-outline-secondary" style="border-radius: 20px; font-weight: 600;" (click)="Back_To_Exam_List()">
                                        &#8592; Back
                                    </button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover" style="font-size: 13px;">
                                    <thead style="background-color: #512DA8; color: white;">
                                        <tr>
                                            <th style="padding: 10px;">#</th>
                                            <th style="padding: 10px;">Question</th>
                                            <th style="padding: 10px;">Option A</th>
                                            <th style="padding: 10px;">Option B</th>
                                            <th style="padding: 10px;">Option C</th>
                                            <th style="padding: 10px;">Option D</th>
                                            <th style="padding: 10px;">Marked Answer</th>
                                            <th style="padding: 10px;">Correct Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let detail of Exam_Details_Data; let j = index"
                                            [style.background-color]="detail.Question_Answer === detail.Correct_Answer ? '#f0fff4' : '#fff5f5'">
                                            <td style="padding: 8px;">{{j + 1}}</td>
                                            <td style="padding: 8px; font-weight: 600;">{{detail.Question_Name}}</td>
                                            <td style="padding: 8px;">{{detail.Option_1}}</td>
                                            <td style="padding: 8px;">{{detail.Option_2}}</td>
                                            <td style="padding: 8px;">{{detail.Option_3}}</td>
                                            <td style="padding: 8px;">{{detail.Option_4}}</td>
                                            <td style="padding: 8px; font-weight: 700;"
                                                [style.color]="detail.Question_Answer === detail.Correct_Answer ? '#16a34a' : '#dc2626'">
                                                {{detail.Question_Answer}}
                                                <span *ngIf="detail.Question_Answer === detail.Correct_Answer">&#10004;</span>
                                                <span *ngIf="detail.Question_Answer !== detail.Correct_Answer">&#10008;</span>
                                            </td>
                                            <td style="padding: 8px; color: #16a34a; font-weight: 700;">{{detail.Correct_Answer}}</td>
                                        </tr>
                                        <tr *ngIf="!Exam_Details_Data || Exam_Details_Data.length === 0">
                                            <td colspan="8" class="text-center" style="padding: 20px; color: #888;">No details available for this exam.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
"@

# Insert after the closing </div>                                        (table-responsive div) in Exam_Tab_View
# Find unique anchor: the first </div> after </table> in this section
$anchor = "                        </div>                                        " + "`r`n" + "                        </div>" + "`r`n" + "                        </div>" + "`r`n" + "                        </div>                        " + "`r`n" + "                        <!-- </div>                         -->"

if ($raw.Contains($anchor)) {
    $replacement = "                        </div>                                        " + "`r`n" + "                        </div>" + "`r`n" + $examDetailsBlock + "`r`n" + "                        </div>" + "`r`n" + "                        </div>                        " + "`r`n" + "                        <!-- </div>                         -->"
    $raw = $raw.Replace($anchor, $replacement)
    Write-Host "SUCCESS: Exam details view panel inserted!"
} else {
    # Simpler fallback - find unique section and inject
    $simpleAnchor = "                        <!-- </div>                         -->" + "`r`n" + "                    </div>" + "`r`n" + "                </div>   "
    if ($raw.Contains($simpleAnchor)) {
        $replacement2 = $examDetailsBlock + "`r`n" + "                        <!-- </div>                         -->" + "`r`n" + "                    </div>" + "`r`n" + "                </div>   "
        $raw = $raw.Replace($simpleAnchor, $replacement2)
        Write-Host "SUCCESS (fallback): Exam details panel inserted."
    } else {
        Write-Host "FAIL: Could not insert exam details panel. Both anchors missing."
    }
}

[System.IO.File]::WriteAllText($filePath, $raw, [System.Text.Encoding]::UTF8)
Write-Host "File saved."
