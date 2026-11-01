import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    # Replace Ventixy -> Nexbay, ventixy -> nexbay, VENTIXY -> NEXBAY
    new_content = new_content.replace('Ventixy', 'Nexbay')
    new_content = new_content.replace('ventixy', 'nexbay')
    new_content = new_content.replace('VENTIXY', 'NEXBAY')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'dist' in root or '.aistudio' in root:
        continue
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.json', '.html', '.md')):
            replace_in_file(os.path.join(root, file))

print("Brand replacement complete!")
