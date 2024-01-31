import "./FooterComponent.scss";

export const FooterComponent = () => {
  return (
    <div className="footer">
      © Copyright {new Date().getFullYear()} by Ilya Semikashev
    </div>
  );
};
