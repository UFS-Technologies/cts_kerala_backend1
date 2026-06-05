const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Users\\AKSHARA T K\\OneDrive\\Desktop\\UFS\\cts_new\\cts_kerala_student_frontend1\\src\\app\\pages\\Student\\Student.component.html';
let content = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to LF for easier regex matching
const originalLineEndings = content.includes('\r\n') ? '\r\n' : '\n';
content = content.replace(/\r\n/g, '\n');

// 1. Uncomment and fix the View Result button
const buttonTarget = `                                 <td><div> <button style="background-color: gray;"  *ngIf="Subject1.Exam_Attended_Status==0 && Subject1.Online_Exam_Status==1" mat-raised-button type="submit" class="other-button-style btnflot pull-right mt-0" id="Write_Exam" (click)="Write_Exam(Subject1)" >\n                                 Write Exam</button>\n                                 <!-- <button style="background-color: green;" *ngIf="Subject.Exam_Attended_Status==2 && Subject.Online_Exam_Status==1"  mat-raised-button type="submit" class="other-button-style btnflot pull-right mt-0" id="View_Result">\n                                     View Result</button> -->\n                             </div>`;
const buttonReplacement = `                                 <td><div> <button style="background-color: gray;"  *ngIf="Subject1.Exam_Attended_Status==0 && Subject1.Online_Exam_Status==1" mat-raised-button type="submit" class="other-button-style btnflot pull-right mt-0" id="Write_Exam" (click)="Write_Exam(Subject1)" >\n                                 Write Exam</button>\n                                 <button style="background-color: green;" *ngIf="Subject1.Exam_Attended_Status==2 && Subject1.Online_Exam_Status==1"  mat-raised-button type="submit" class="other-button-style btnflot pull-right mt-0" id="View_Result" (click)="View_Exam_Details(Subject1)">\n                                     View Result</button>\n                             </div>`;

if (!content.includes(buttonTarget)) {
    console.error("Could not find buttonTarget in file!");
} else {
    content = content.replace(buttonTarget, buttonReplacement);
    console.log("Successfully replaced buttonTarget");
}

// 2. Wrap exam list table in !Exam_Details_Hidden and add Exam Details panel
const tableTarget = `                                 <div class="dt-card mb-0 pb-1 " style="background-color: #ffff;" >  \n                                     <h3><b>Exam Details</b></h3> \n                     <div class="table-responsive">`;
const tableReplacement = `                                 <div class="dt-card mb-0 pb-1 " style="background-color: #ffff;" >  \n                                     <h3 *ngIf="!Exam_Details_Hidden"><b>Exam Details</b></h3> \n                     <div class="table-responsive" *ngIf="!Exam_Details_Hidden">`;

if (!content.includes(tableTarget)) {
    console.error("Could not find tableTarget in file!");
} else {
    content = content.replace(tableTarget, tableReplacement);
    console.log("Successfully replaced tableTarget");
}

// 3. Insert the Exam Details View block right before the closing of the dt-card div.
// Let's find:
//                      </table>                                        
//                  </div>                                        
//                  </div>
// And replace with table ending + Exam Details View block + closing div.
const endCardTarget = `                     </table>                                        \n                         </div>                                        \n                         </div>`;

const examDetailsBlock = `                     </table>                                        
                         </div>                                        

                         <!-- Exam Details View -->
                         <div *ngIf="Exam_Details_Hidden" style="padding: 15px;">
                             <div class="row mb-3 align-items-center">
                                 <div class="col-md-8">
                                     <h4 style="color: #512DA8; font-weight: 700;">
                                         Exam Details — {{Selected_Exam?.Subject_Name}}
                                     </h4>
                                     <p style="font-size: 14px; color: #555; margin-bottom: 0;">
                                         Exam Date: <strong>{{Selected_Exam?.Exam_Date | date:'dd-MM-yyyy'}}</strong> &nbsp;|&nbsp;
                                         Score: <strong>{{Selected_Exam?.Mark_Obtained}}</strong>
                                     </p>
                                 </div>
                                 <div class="col-md-4 text-right">
                                     <button class="btn btn-sm btn-outline-secondary" style="border-radius: 20px; font-weight: 600;" (click)="Back_To_Exam_List()">
                                         ← Back to Exam List
                                     </button>
                                 </div>
                             </div>
                             <div class="table-responsive">
                                 <table class="table table-bordered table-hover colour-change-title-searchsection-table heading-styles-as-gmail-format" style="font-size: 13px;">
                                     <thead style="background-color: #512DA8; color: white;">
                                         <tr>
                                             <th style="padding: 10px; width: 5%;">#</th>
                                             <th style="padding: 10px; width: 35%;">Question</th>
                                             <th style="padding: 10px; width: 10%;">Option A</th>
                                             <th style="padding: 10px; width: 10%;">Option B</th>
                                             <th style="padding: 10px; width: 10%;">Option C</th>
                                             <th style="padding: 10px; width: 10%;">Option D</th>
                                             <th style="padding: 10px; width: 10%;">Marked Answer</th>
                                             <th style="padding: 10px; width: 10%;">Correct Answer</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         <tr *ngFor="let detail of Exam_Details_Data; let j = index">
                                             <td style="padding: 8px;">{{j + 1}}</td>
                                             <td style="padding: 8px; font-weight: 600;">{{detail.Question_Name}}</td>
                                             <td style="padding: 8px;">{{detail.Option_1}}</td>
                                             <td style="padding: 8px;">{{detail.Option_2}}</td>
                                             <td style="padding: 8px;">{{detail.Option_3}}</td>
                                             <td style="padding: 8px;">{{detail.Option_4}}</td>
                                             <td style="padding: 8px; font-weight: 700;" [style.color]="detail.Question_Answer === detail.Correct_Answer ? 'green' : 'red'">
                                                 {{detail.Question_Answer}}
                                                 <span *ngIf="detail.Question_Answer === detail.Correct_Answer" style="margin-left: 4px;">✔️</span>
                                                 <span *ngIf="detail.Question_Answer !== detail.Correct_Answer" style="margin-left: 4px;">❌</span>
                                             </td>
                                             <td style="padding: 8px; color: green; font-weight: 700;">{{detail.Correct_Answer}}</td>
                                         </tr>
                                         <tr *ngIf="!Exam_Details_Data || Exam_Details_Data.length === 0">
                                             <td colspan="8" class="text-center" style="padding: 20px; color: #888;">No details available for this exam.</td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                         </div>`;

if (!content.includes(endCardTarget)) {
    console.error("Could not find endCardTarget in file!");
} else {
    content = content.replace(endCardTarget, examDetailsBlock);
    console.log("Successfully replaced endCardTarget");
}

// Convert back to original line endings and write back
content = content.replace(/\n/g, originalLineEndings);
fs.writeFileSync(filePath, content, 'utf8');
console.log("File saved successfully.");
process.exit(0);
