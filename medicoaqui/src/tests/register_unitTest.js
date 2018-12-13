import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import RegisterForm from "../src/components/login/loginForm/registerForm";


describe("<RegisterForm />", () => {

  it("should return an p with 'Sing up' string", () => {

    const component = TestUtils.renderIntoDocument(
      <RegisterForm />
    );

    const p = TestUtils.findRenderedDOMComponentWithTag(
      component, "p"
    );

    expect(p.textContent).toEqual("Sing up");

  });

});