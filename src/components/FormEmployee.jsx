/** React */
import { useState } from "react";

/** Components */
import FormFieldText from "./FormFieldText";
import FormFieldDate from "./FormFieldDate";
import FormSelect from "./FormSelect";
import FormFieldNumber from "./FormFieldNumber";

/** Utils */
import FormValidator from "../utils/formValidator";

export default function FormEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState(0);
  const [department, setDepartment] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    zipode: "",
  });

  function handleFirstNameChange(e) {
    const { value } = e.target;
    setFirstName(value);
    const errorMessage = FormValidator.validateField("firstName", value);
    setErrors((prevErrors) => ({ ...prevErrors, firstName: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleLastNameChange(e) {
    const { value } = e.target;
    setLastName(value);
    const errorMessage = FormValidator.validateField("lastName", value);
    setErrors((prevErrors) => ({ ...prevErrors, lastName: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handlebirthDateChange(e) {
    const { value } = e.target;
    setBirthDate(value);
    const errorMessage = FormValidator.validateField("birthDate", value);
    setErrors((prevErrors) => ({ ...prevErrors, birthDate: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleStartDateChange(e) {
    const { value } = e.target;
    setStartDate(value);
    const errorMessage = FormValidator.validateField("startDate", value);
    setErrors((prevErrors) => ({ ...prevErrors, startDate: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleDepartmentChange(e) {
    const { value } = e.target;
    setDepartment(value);
    const errorMessage = FormValidator.validateField("department", value);
    setErrors((prevErrors) => ({ ...prevErrors, department: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleStateChange(e) {
    const { value } = e.target;
    setState(value);
    const errorMessage = FormValidator.validateField("state", value);
    setErrors((prevErrors) => ({ ...prevErrors, state: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleStreetChange(e) {
    const { value } = e.target;
    setStreet(value);
    const errorMessage = FormValidator.validateField("street", value);
    setErrors((prevErrors) => ({ ...prevErrors, street: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleCityChange(e) {
    const { value } = e.target;
    setCity(value);
    const errorMessage = FormValidator.validateField("city", value);
    setErrors((prevErrors) => ({ ...prevErrors, city: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function handleZipCodeChange(e) {
    const { value } = e.target;
    setZipcode(value);
    const errorMessage = FormValidator.validateField("zipCode", value);
    setErrors((prevErrors) => ({ ...prevErrors, zipCode: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function saveEmployee(e) {
    e.preventDefault();
    console.log("Created");
  }

  return (
    <form
      action="#"
      className="w-11/12 p-5 bg-light rounded-md shadow flex flex-col flex-nowrap md:grid md:grid-cols-2 md:gap-10"
    >
      <div className="w-full">
        <FormFieldText
          isRequired={true}
          id="given-name"
          label="First Name"
          errorMessage={errors.firstName}
          value={firstName}
          event={handleFirstNameChange}
        />
        <FormFieldText
          isRequired={true}
          id="family-name"
          label="Last Name"
          errorMessage={errors.lastName}
          value={lastName}
          event={handleLastNameChange}
        />
        <FormFieldDate
          isRequired={true}
          id="bday"
          label="Date of birth"
          errorMessage={errors.birthDate}
          value={birthDate}
          event={handlebirthDateChange}
        />
        <FormFieldDate
          isRequired={true}
          id="start-date"
          label="Start date"
          errorMessage={errors.startDate}
          value={startDate}
          event={handleStartDateChange}
        />
        <FormSelect
          isRequired={true}
          id="department"
          label="Department"
          options={[
            "Sales",
            "Marketing",
            "Engineering",
            "Human Resources",
            "Legal",
          ]}
          errorMessage={errors.department}
          value={department}
          event={handleDepartmentChange}
        />
      </div>
      <div className="w-full md:-mt-3">
        <fieldset className="address border-solid border-2 border-tertiary rounded-md -mx-3 px-3 my-3">
          <legend className="w-fit mx-auto text-tertiary font-bold">
            Address
          </legend>

          <FormFieldText
            isRequired={true}
            id="street-address"
            label="Street"
            errorMessage={errors.street}
            value={street}
            event={handleStreetChange}
          />
          <FormFieldText
            isRequired={true}
            id="address-level2"
            label="City"
            errorMessage={errors.city}
            value={city}
            event={handleCityChange}
          />
          <FormSelect
            isRequired={true}
            id="state"
            label="State"
            options={[
              "Alabama",
              "Alaska",
              "American Samoa",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "District Of Columbia",
              "Federated States Of Micronesia",
              "Florida",
              "Georgia",
              "Guam",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Marshall Islands",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Northern Mariana Islands",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Palau",
              "Pennsylvania",
              "Puerto Rico",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virgin Islands",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ]}
            errorMessage={errors.state}
            value={state}
            event={handleStateChange}
          />
          <FormFieldNumber
            isRequired={true}
            id="zipcode"
            label="Zip code"
            min={0}
            step={1}
            errorMessage={errors.zipode}
            value={zipcode}
            event={handleZipCodeChange}
          />
        </fieldset>
      </div>
      <button
        onClick={saveEmployee}
        className="w-full bg-tertiary rounded-md text-xl m-0 text-white p-2 shadow hover:shadow-md focus:shadow-md md:col-span-2"
      >
        Save
      </button>
    </form>
  );
}
