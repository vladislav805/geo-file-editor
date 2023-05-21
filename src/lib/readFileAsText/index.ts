export function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            resolve(reader.result as string);
        });

        reader.addEventListener('error', () => {
            reject();
        });

        reader.readAsText(file, 'utf-8');
    });
}
