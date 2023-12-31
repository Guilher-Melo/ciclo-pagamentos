import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import Input from "../common/form/labelAndInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCycleActions";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {

  calculateSummary(){
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {
    const { handleSubmit, readOnly, credits, debits } = this.props;
    const { sumOfCredits, sumOfDebits } = this.calculateSummary();

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component={Input} label="Nome" cols='12 4' placeholder="Informe o nome" readOnly={readOnly} />
          <Field name="month" component={Input} type="number" label="Mês" cols='12 4' placeholder="Informe o mês" readOnly={readOnly} />
          <Field name="year" component={Input} type="number" label="Ano" cols='12 4' placeholder="Informe o ano" readOnly={readOnly} />
          <Summary credit={sumOfCredits} debit={sumOfDebits} />
          <ItemList cols="12 6" readOnly={readOnly} list={credits} legend="Créditos" field="credits" />
          <ItemList cols="12 6" readOnly={readOnly} list={debits} legend="Débitos" field="debits" showStatus={true}/>
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

const selector = formValueSelector('billingCycleForm');

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debits: selector(state, 'debits')
  })
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
