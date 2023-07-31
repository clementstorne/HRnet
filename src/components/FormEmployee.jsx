/** React */
import { useState } from "react";

/** Components */
import FormFieldText from "./FormFieldText";
import FormFieldDate from "./FormFieldDate";
import FormSelect from "./FormSelect";
import FormFieldNumber from "./FormFieldNumber";

/** Store */
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../store/employeesSlice";

/** Utils */
import FormValidator from "../utils/formValidator";

export default function FormEmployee() {
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employees.list);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
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

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

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
    setZipCode(parseInt(value));
    const errorMessage = FormValidator.validateField("zipCode", value);
    setErrors((prevErrors) => ({ ...prevErrors, zipCode: errorMessage }));
    if (errorMessage) {
      e.target.setAttribute("aria-invalid", "true");
    } else {
      e.target.removeAttribute("aria-invalid");
    }
  }

  function isFormEmpty() {
    return (
      firstName === "" ||
      lastName === "" ||
      birthDate === "" ||
      startDate === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      zipCode === 0 ||
      department === ""
    );
  }

  function clearForm() {
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode(0);
    setDepartment("");
    setErrors({
      firstName: "",
      lastName: "",
      birthDate: "",
      startDate: "",
      street: "",
      city: "",
      zipode: "",
    });
  }

  function saveEmployee(e) {
    e.preventDefault();
    if (isFormEmpty()) {
      return;
    } else if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.birthDate &&
      !errors.startDate &&
      !errors.street &&
      !errors.city &&
      !errors.zipode
    ) {
      const employee = {
        id: employeeList.length + 1,
        firstName,
        lastName,
        dateOfBirth: birthDate,
        startDate,
        department,
        street,
        city,
        state,
        zipCode,
      };
      dispatch(addEmployee(employee));
      clearForm();
    }
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
            { name: "Sales", abbreviation: "Sales" },
            { name: "Marketing", abbreviation: "Marketing" },
            { name: "Engineering", abbreviation: "Engineering" },
            { name: "Human Resources", abbreviation: "Human Resources" },
            { name: "Legal", abbreviation: "Legal" },
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
            options={states}
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
            value={zipCode}
            event={handleZipCodeChange}
          />
        </fieldset>
      </div>
      <input
        type="submit"
        onClick={saveEmployee}
        className="w-full bg-tertiary rounded-md text-xl m-0 text-white p-2 shadow hover:shadow-md focus:shadow-md md:col-span-2"
        value="Save"
      />
    </form>
  );
}
