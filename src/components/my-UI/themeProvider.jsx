import { useSelector } from "react-redux";
// import PropTypes from "prop-types";

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  //   console.log(theme);

  return (
    <div className={theme}>
      <div className="">{children}</div>
    </div>
  );
}

export default ThemeProvider;

// ThemeProvider.propTypes = {
//   children: PropTypes.object.isRequired,
// };
