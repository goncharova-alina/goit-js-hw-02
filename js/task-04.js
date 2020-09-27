function formatString (string) {
    // Write code under this line
    let length = string.length;
    const maxLength = 40;
    const dots = "...";
    if (length <= maxLength) {
      return string;
    } else if (length > maxLength) {
      return string.slice(0, maxLength).concat(dots);
    }
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'