boolean isMAC48Address(String inputString) {
  for (int i = 0; i < inputString.length(); i++) {
      if (i % 3 == 2) {
          if (inputString.charAt(i) != '-') {
              return false;
          }
      } else {
          char sym = inputString.charAt(i);
          if (!('0' <= sym && sym <= '9' || 'A' <= sym && sym <= 'F')) {
              return false;
          }
      }
  }
  return inputString.length() == 17;
}