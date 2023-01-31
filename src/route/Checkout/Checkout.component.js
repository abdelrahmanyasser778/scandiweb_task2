import React from 'react';
import { Checkout as SourceCheckout } from 'SourceComponent/@scandipwa/scandipwa/src/route/Checkout/Checkout.component';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';

import ProgressBar from '../../component/Progressbar/Progressbar.component';

import './Checkout.override.style';

class Checkout extends SourceCheckout {

    render() {
      return (
        <>
          <ProgressBar
            allSteps={this.stepMap}
            currentStep={this.props.checkoutStep}
          />
          <main block="Checkout">
            <ContentWrapper
              wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
              label={__("Checkout page")}
            >
              {this.renderSummary(true)}
              <div block="Checkout" elem="Step">
                {this.renderTitle()}
                {this.renderGuestForm()}
                {this.renderStep()}
                {this.renderLoader()}
              </div>
              <div>
                {this.renderSummary()}
                {this.renderPromo()}
                {this.renderCoupon()}
              </div>
            </ContentWrapper>
          </main>
        </>
      );
    }
  }
  
  export default Checkout;
  
