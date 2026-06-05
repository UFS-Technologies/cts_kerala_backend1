$f = 'c:\Users\AKSHARA T K\OneDrive\Desktop\UFS\cts_new\cts_kerala_student_frontend1\src\app\pages\Student\Student.component.html'
$raw = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Find the garbled em-dash pattern and fix it
$idx = $raw.IndexOf('Result ')
while ($idx -ge 0) {
    $snippet = $raw.Substring($idx, 50)
    if ($snippet -notmatch '^Result — \{\{') {
        Write-Host "Found garbled at $idx : $($snippet.Substring(0,30))"
        # Replace the garbled chars (anything non-ASCII) between "Result " and " {{" with " — "
        $before = $raw.Substring(0, $idx + 7) # "Result "
        $afterIdx = $raw.IndexOf('{{Selected_Exam', $idx)
        if ($afterIdx -ge 0) {
            $after = $raw.Substring($afterIdx)
            $raw = $before + '— ' + $after
            Write-Host 'Fixed em-dash'
        }
        break
    }
    $idx = $raw.IndexOf('Result ', $idx + 1)
}

[System.IO.File]::WriteAllText($f, $raw, [System.Text.Encoding]::UTF8)
Write-Host 'Saved.'
