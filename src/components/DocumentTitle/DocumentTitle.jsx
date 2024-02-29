import { Helmet } from "react-helmet-async";

export default function DocumentTitle({ children }) {
  return (
    <div>
      <Helmet>
        <title>{children}</title>
      </Helmet>
    </div>
  );
}
