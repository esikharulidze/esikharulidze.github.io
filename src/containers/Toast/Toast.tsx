import { delay } from "lodash";
import React, { PureComponent } from "react";

export default class Toast extends PureComponent {
  state = {
    toastIsActive: false,
  };

  show = () => {
    console.log('inside show')
    this.setState({ toastIsActive: true });
  };

  hide = () => {
    this.setState({ toastIsActive: false });
  };

  componentDidUpdate() {
    if (this.state.toastIsActive) {
      delay(this.hide, 2000)
    }
  }

  render() {
    return this.state.toastIsActive ? (
        <div className='fixed left-1/2 transform -translate-x-1/2'>

<div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
  <div className="flex items-center justify-center w-12 bg-green-500">
      <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
      </svg>
  </div>
  
  <div className="px-4 py-2 -mx-3">
      <div className="mx-3">
          <span className="font-semibold text-green-500 dark:text-green-400">ვიზიტი გაგზავნილია</span>
          <p className="text-sm text-gray-600 dark:text-gray-200">თქვენ წარმატებით გაგზავნეთ ვიზიტის!</p>
      </div>
  </div>
</div>
        </div>
    ) : null;
  }
}
