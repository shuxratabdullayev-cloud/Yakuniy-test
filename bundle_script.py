import os
import re

# Define file paths
base_dir = r'C:\Users\Admin\.gemini\antigravity\scratch\Yakuniy-imtixon-fixed'
files_to_bundle = [
    os.path.join(base_dir, 'data', 'questions.js'),
    os.path.join(base_dir, 'utils', 'timer.js'),
    os.path.join(base_dir, 'utils', 'storage.js'),
    os.path.join(base_dir, 'app.js')
]
output_file = os.path.join(base_dir, 'app-bundled.js')

def clean_code(code):
    """Remove import/export statements"""
    # Remove import statements
    code = re.sub(r'import\s+.*?from\s+[\'"].*?[\'"];?\s*\r?\n', '', code)
    # Remove export keyword
    code = re.sub(r'export\s+', '', code)
    return code

# Read and combine all files
bundled_content = f"// Bundled JavaScript for Yakuniy Imtixon\n// Generated automatically\n\n"

for file_path in files_to_bundle:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            cleaned = clean_code(content)
            bundled_content += f"\n// ===== {os.path.basename(file_path)} =====\n"
            bundled_content += cleaned + "\n"
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

# Write bundled file
try:
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(bundled_content)
    print(f"✅ Successfully created {output_file}")
    print(f"📦 Bundled {len(files_to_bundle)} files")
except Exception as e:
    print(f"❌ Error writing output file: {e}")
