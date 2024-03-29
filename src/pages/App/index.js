import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../../components/Menu';
import Main from './components/Main';

const App = () => (
  <>
    <Menu />
    <Switch>
      <Route exact path="/app/main" component={Main} />

      {/* <Route path="/login" component={Login} />
        <Route path="/landing" component={Landing} /> */}

      {/* <Route path="/app/quotation/:cd" component={QuotationDetails} />
        <Route path="/app/proposal/:cd" component={ProposalDetails} />
        <Route path="/app/policy/:cd" component={PolicyDetails} />
        <Route path="/app/new-quotation" component={NewQuotation} />
        <Route
          path="/app/new-custom-quotation"
          component={NewCustomQuotation}
        />
        <Route path="/app/quotation" component={QuotationList} />
        <Route path="/app/proposal" component={ProposalList} />
        <Route path="/app/policy" component={PolicyList} />
        <Route path="/app/policymanager" component={PolicyManager} />
        <Route path="/app/notifications" component={Notifications} />
        <Route path="/app/profile/:id" component={ProfileDetails} />
        <Route path="/app/profile" component={ProfileDetails} />
        <Route path="/app/edit-profile" component={EditProfile} />
        <Route path="/app/change-pass" component={ChangePass} />
        <Route path="/app/insurenceClaim" component={InsuranceClaim} /> */}
      <Route path="/app/*" component={() => <h1>Not found</h1>} />
    </Switch>
  </>
);

export default App;
