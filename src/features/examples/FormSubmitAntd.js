import React, { Component } from 'react';
import { Button, DatePicker, Form, Input, Select } from "antd"
import FormBuilder from "./FormBuilder"
import PropTypes from 'prop-types'

const Option = Select.Options

const genderOptions = [
  { value: "male", displayName: "Male"},
  {value: "female", displayName: "Female"}
].map(item => (
  <Option key={item.value} value={item.value}>{item.displayName}</Option>
))

const formMeta ={
  colon: true,
  columns: 1,
  elements: [
    {
      key: "userName",
      label: "User name",
      tooltip: "user name",
      widget: Input,
      required: true
    },
    {
      key: "password",
      label: "Password",
      widget: Input,
      type: 'password'
    },
    {
      key: "date",
      label: "Birth date",
      widget: DatePicker,
      widgetProps: {style: {width: "100%"}}
    },
    {
      key: "gender",
      label: "Gender",
      initialValue: "female",
      widget: Select,
      children: genderOptions
    },
    {
      key: "phone",
      label: "Phone",
      required: true,
      widget: Input,
      rules: [
        {
          pattern: /^\d+$/,
          message: "Phone must only contain numbers."
        }
      ]
    },
    {
      key: "email",
      label: "Email",
      widget: Input,
      rules: [
        {
          type: "email",
          message: "Please input valid email address."
        }
      ]
    }
  ]
}

class FormSubmitAntd extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  resetForm() {
    this.props.form.resetFields();
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.props.form.validateFieldsAndScroll(
      (err, val) => {
        if (err) {
          return;
        }
        console.log("Submit form: ", val)
      }
    )
  }

  render() {
    return (
      <div className="examples-form-submit-antd">
        Page Content: examples/FormSubmitAntd
      </div>
    );
  }
}

export default FormSubmitAntd