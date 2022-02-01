import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donate from "./components/frontend/pages/Donate";
import Children from "./components/frontend/pages/Children";
import { StoreProvider } from "./store/StoreContext";
import ChildrenList from "./components/backend/pages/children/ChildrenList";
import ProjectList from "./components/backend/pages/projects/ProjectList";
import UserList from "./components/backend/pages/users/UserList";
import GeneralDonationList from "./components/backend/pages/generaldonation/GeneralDonationList";
import { devNavUrl } from "./components/helpers/functions-general";
import SponsorshipList from "./components/backend/pages/donor/sponsorship/SponsorshipList.js";
import DonorAccount from "./components/backend/pages/donor/account/DonorAccount.js";
import Login from "./components/frontend/Login.js";
import CreatePassword from "./components/frontend/donor-registration/CreatePassword.js";
import CreateSuccess from "./components/frontend/donor-registration/CreateSuccess.js";
import CheckInbox from "./components/frontend/donor-registration/CheckInbox.js";
import ForgotPasswordVerification from "./components/frontend/forgot-password/ForgotPasswordVerification.js";
import ForgotPassword from "./components/frontend/forgot-password/ForgotPassword.js";
import ForgotPasswordSuccess from "./components/frontend/forgot-password/ForgotPasswordSuccess.js";
import SponsorshipListArchive from "./components/backend/pages/donor/sponsorship/SponsorshipListArchive.js";
import Thankyou from "./components/frontend/pages/Thankyou.js";
import ManualDonation from "./components/backend/pages/donation/manual/ManualDonation.js";
import CreditCard from "./components/backend/pages/donation/credit-card/CreditCard.js";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            <Route path={`${devNavUrl}/donate`} element={<Donate />} />
            <Route path={`${devNavUrl}/children`} element={<Children />} />
            <Route path={`${devNavUrl}/thankyou`} element={<Thankyou />} />

            <Route
              path={`${devNavUrl}/admin/manual-donation`}
              element={<ManualDonation />}
            />
            <Route
              path={`${devNavUrl}/admin/credit-card-donation`}
              element={<CreditCard />}
            />

            <Route
              path={`${devNavUrl}/admin/children`}
              element={<ChildrenList />}
            />
            <Route
              path={`${devNavUrl}/admin/projects`}
              element={<ProjectList />}
            />
            <Route
              path={`${devNavUrl}/admin/general-donation`}
              element={<GeneralDonationList />}
            />
            <Route path={`${devNavUrl}/admin/users`} element={<UserList />} />
            <Route
              path={`${devNavUrl}/sponsorship-active`}
              element={<SponsorshipList />}
            />

            <Route
              path={`${devNavUrl}/sponsorship-archive`}
              element={<SponsorshipListArchive />}
            />
            <Route
              path={`${devNavUrl}/donor-account`}
              element={<DonorAccount />}
            />
            <Route path={`${devNavUrl}/login`} element={<Login />} />
            <Route
              path={`${devNavUrl}/create-password`}
              element={<CreatePassword />}
            />
            <Route
              path={`${devNavUrl}/create-success`}
              element={<CreateSuccess />}
            />
            <Route path={`${devNavUrl}/check-email`} element={<CheckInbox />} />
            <Route
              path={`${devNavUrl}/forgot-password`}
              element={<ForgotPassword />}
            />
            <Route
              path={`${devNavUrl}/forgot-password-verification`}
              element={<ForgotPasswordVerification />}
            />

            <Route
              path={`${devNavUrl}/forgot-password-success`}
              element={<ForgotPasswordSuccess />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
