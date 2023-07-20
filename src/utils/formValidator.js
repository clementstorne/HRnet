/**
 * Class for form fields validator functions.
 */
class FormValidator {
  /**
   * Checks if the name is correct.
   * @param   {String}  str  String to test
   * @return  {Boolean}      'true' if the name is correct 'false' if not
   */
  static isNameValid(str) {
    let regex =
      /^[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\/\<\>\=\@\[\]\\\^\_\{\}\|\~]{2,}$/;
    return regex.test(str);
  }

  static isDateValid() {
    return true;
  }

  static validateField(fieldName, value) {
    switch (fieldName) {
      case "firstName":
        if (value.trim() === "") {
          return "First name is required";
        } else if (!FormValidator.isNameValid(value)) {
          return "First name format is incorrect";
        }
        break;
      case "lastName":
        if (value.trim() === "") {
          return "Last name is required";
        } else if (!FormValidator.isNameValid(value)) {
          return "Last name format is incorrect";
        }
        break;
      case "street":
        if (value.trim() === "") {
          return "Street is required";
        } else if (!FormValidator.isNameValid(value)) {
          return "Street format is incorrect";
        }
        break;
      case "city":
        if (value.trim() === "") {
          return "City is required";
        } else if (!FormValidator.isNameValid(value)) {
          return "City format is incorrect";
        }
        break;
      case "birthDate":
        if (value.trim() === "") {
          return "Birthdate is required";
        } else if (!FormValidator.isDateValid(value)) {
          return "Birthdate format is incorrect";
        }
        break;
      case "startDate":
        if (value.trim() === "") {
          return "Start date is required";
        } else if (!FormValidator.isDateValid(value)) {
          return "Start date format is incorrect";
        }
        break;
      default:
        break;
    }
  }
}

export default FormValidator;
