import Controller from "@ember/controller";

export default class InputTextEnterSubmitsController extends Controller {
  withSubmit(/*event*/) {
    window.alert('<form {{on "submit" this.withSubmit}}>');
    return false;
  }
}
