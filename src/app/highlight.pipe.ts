import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  charactersMap = new Map<string, number[]>([
    [
      '1',
      [
        0x0627, 0x062d, 0x062f, 0x0631, 0x0633, 0x0635, 0x0637, 0x0639, 0x0643,
        0x0644, 0x0645, 0x0647, 0x0648, 0x623, 0x671,
      ],
    ], // nonNuqtaLetters
    [
      '2',
      [
        0x0622, 0x0623, 0x0624, 0x0625, 0x0626, 0x0627, 0x0628, 0x062a, 0x062b,
        0x062c, 0x062d, 0x062e, 0x0633, 0x0634, 0x0635, 0x0636, 0x0637, 0x0638,
        0x0639, 0x063a,
      ],
    ] // sunLetters
    
  ]);
  transform(value: string, selectedOption: number): string {
    // Split the string into an array of words
    const words = value.split('');
    const noSpaceWords = value
      .split(' ')
      .map((item) => item.trim())
      .join('');

    let count = 0;
    const highlightedWords = words.map((word, index) => {
      count++;

      if (this.isSunLetter(word, selectedOption)) {
        return '<span class="text-blue-500">' + word + '</span>';
      }

      return word;
    });

    return highlightedWords.join('');
  }

  isSunLetter(character: string, selectedOption: number): boolean {
    // Convert the input character to its Unicode code point
    const codePoint = character.charCodeAt(0);
    // Check if the character is within the range of Arabic letters
    //  if (codePoint >= 0x0621 && codePoint <= 0x063A) {
    let codePresent =
      selectedOption == 3 ? !this.charactersMap.get('1')?.includes(codePoint): this.charactersMap.get(selectedOption.toString())?.includes(codePoint);
    if (codePresent) {
      return true;
    }
    // Return false if the character is not a sun letter or not an Arabic letter
    return false;
  }
}
