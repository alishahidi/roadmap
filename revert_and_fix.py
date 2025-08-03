import re
import os

def revert_details_blocks(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # This regex finds ':::details Title' and the closing ':::'
    # and replaces it with a standard markdown header.
    # It handles multi-line code blocks gracefully.
    regex = re.compile(r'^:::details\s+(.*?)\n(```[\s\S]*?^```)\n^:::', re.MULTILINE)

    def replace_with_header(match):
        title = match.group(1).strip()
        code_block = match.group(2)
        # Convert the title into a '####' markdown header
        return f"#### {title}\n\n{code_block}"

    new_content = regex.sub(replace_with_header, content)

    with open(filepath, 'w') as f:
        f.write(new_content)

for root, dirs, files in os.walk('docs'):
    for file in files:
        if file.endswith('.mdx'):
            filepath = os.path.join(root, file)
            print(f"Reverting {filepath}...")
            revert_details_blocks(filepath)

print("Done reverting files.")
