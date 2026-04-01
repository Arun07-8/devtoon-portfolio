$dirs = "src\components", "src\components\ui"
foreach ($dir in $dirs) {
    if (Test-Path $dir) {
        Get-ChildItem -Path $dir -Filter *.tsx | ForEach-Object {
            $content = Get-Content $_.FullName -Raw
            if (-not $content.StartsWith('"use client";')) {
                $newContent = '"use client";' + "`r`n`r`n" + $content
                Set-Content -Path $_.FullName -Value $newContent
            }
        }
    }
}
