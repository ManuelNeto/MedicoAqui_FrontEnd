import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import LoginForm from "../src/components/login/loginForm/loginForm";


describe("<LoginForm />", () => {

  it("should return an p with 'Sing in' string", () => {

    const component = TestUtils.renderIntoDocument(
      <LoginForm />
    );

    const p = TestUtils.findRenderedDOMComponentWithTag(
      component, "p"
    );

    expect(p.textContent).toEqual("Sing in");

  });

});