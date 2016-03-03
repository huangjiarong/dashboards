(function(){
Template.__checkName("formWizard");
Template["formWizard"] = new Template("Template.formWizard", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Wizard"),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.Raw('<div class="col-lg-5">\n                <div class="jumbotron">\n                    <h1>Steps</h1>\n                    <p>Smart UI component which allows you to easily create wizard-like interfaces.</p>\n                    <p><a href="http://www.jquery-steps.com/GettingStarted" target="_blank" class="btn btn-primary btn-lg" role="button">Learn more about jQuery Steps</a>\n                    </p>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-lg-7"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Basic Wizzard</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <p>\n                            This is basic example of Step\n                        </p>\n                        <div id="wizard">\n                            <h1>First Step</h1>\n                            <div class="step-content">\n                                <div class="text-center m-t-md">\n                                    <h2>Hello in Step 1</h2>\n                                    <p>\n                                        This is the first content.\n                                    </p>\n                                </div>\n                            </div>\n\n                            <h1>Second Step</h1>\n                            <div class="step-content">\n                                <div class="text-center m-t-md">\n                                    <h2>This is step 2</h2>\n                                    <p>\n                                        This content is diferent than the first one.\n                                    </p>\n                                </div>\n                            </div>\n\n                            <h1>Third Step</h1>\n                            <div class="step-content">\n                                <div class="text-center m-t-md">\n                                    <h2>This is step 3</h2>\n                                    <p>\n                                        This is last content.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Wizard with Validation</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <h2>\n                            Validation Wizard Form\n                        </h2>\n                        <p>\n                            This example show how to use Steps with jQuery Validation plugin.\n                        </p>\n\n                        <form id="form" action="#" class="wizard-big">\n                            <h1>Account</h1>\n                            <fieldset>\n                                <h2>Account Information</h2>\n                                <div class="row">\n                                    <div class="col-lg-8">\n                                        <div class="form-group">\n                                            <label>Username *</label>\n                                            <input id="userName" name="userName" type="text" class="form-control required">\n                                        </div>\n                                        <div class="form-group">\n                                            <label>Password *</label>\n                                            <input id="password" name="password" type="text" class="form-control required">\n                                        </div>\n                                        <div class="form-group">\n                                            <label>Confirm Password *</label>\n                                            <input id="confirm" name="confirm" type="text" class="form-control required">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-4">\n                                        <div class="text-center">\n                                            <div style="margin-top: 20px">\n                                                <i class="fa fa-sign-in" style="font-size: 180px;color: #e5e5e5 "></i>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </fieldset>\n                            <h1>Profile</h1>\n                            <fieldset>\n                                <h2>Profile Information</h2>\n                                <div class="row">\n                                    <div class="col-lg-6">\n                                        <div class="form-group">\n                                            <label>First name *</label>\n                                            <input id="name" name="name" type="text" class="form-control required">\n                                        </div>\n                                        <div class="form-group">\n                                            <label>Last name *</label>\n                                            <input id="surname" name="surname" type="text" class="form-control required">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-6">\n                                        <div class="form-group">\n                                            <label>Email *</label>\n                                            <input id="email" name="email" type="text" class="form-control required email">\n                                        </div>\n                                        <div class="form-group">\n                                            <label>Address *</label>\n                                            <input id="address" name="address" type="text" class="form-control">\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <h1>Warning</h1>\n                            <fieldset>\n                                <div class="text-center" style="margin-top: 120px">\n                                    <h2>You did it Man :-)</h2>\n                                </div>\n                            </fieldset>\n\n                            <h1>Finish</h1>\n                            <fieldset>\n                                <h2>Terms and Conditions</h2>\n                                <input id="acceptTerms" name="acceptTerms" type="checkbox" class="required"> <label for="acceptTerms">I agree with the Terms and Conditions.</label>\n                            </fieldset>\n                        </form>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

}).call(this);