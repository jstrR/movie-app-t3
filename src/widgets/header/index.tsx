import React, { useContext } from "react";
import Link from 'next/link'
// import { useTranslation } from "react-i18next";
// import { useStore } from "effector-react";

// import MenuItem from "@material-ui/core/MenuItem";

import { ButtonNav } from "shared/ui/buttons";

export const Header = () => {
  //const location = useLocation();
  //const { t } = useTranslation();

  //   const user = useStore(userModel.$currentUser);
  //   const isAuthenticated = useStore(userModel.$isAuthenticated);
  //   const viewsContext = useContext(ViewContext);

  //   const mobileControlsView = (
  //     <>
  //       <ButtonNav to="/profile">{t("common.myProfile")}</ButtonNav>
  //       {user?.token ? (
  //         <GoogleLogOut
  //           onClick={userModel.logOut}
  //           render={(renderProps: any) => (
  //             <ButtonGeneric
  //               onClick={renderProps.onClick}
  //               disabled={renderProps.disabled}
  //               event="logOut">
  //               {t("common.logOut")}
  //             </ButtonGeneric>
  //           )}
  //         />
  //       ) : (
  //         <ButtonGeneric event="logOut" onClick={userModel.logOut}>
  //           {t("common.logOut")}
  //         </ButtonGeneric>
  //       )}
  //     </>
  //   );

  //   const desktopControlsView = [
  //     { defaultComponent: true, props: { component: Link, to: "/profile" }, children: t("common.myProfile") },
  //     user?.token ? {
  //       component: GoogleLogOut,
  //       props: {
  //         render: (renderProps: any) => (
  //           <MenuItem
  //             onClick={renderProps.onClick}
  //             disabled={renderProps.disabled}>
  //             {t("common.logOut")}
  //           </MenuItem>
  //         )
  //       },
  //       onClick: userModel.logOut
  //     } : { defaultComponent: true, props: {}, children: t("common.logOut"), onClick: userModel.logOut }
  //   ];

  return (
    <header className="flex items-center justify-between border-b flex-col md:flex-row py-5">
      <h2 className="flex text-2xl justify-between text-mainColor font-bold md:ml-20 mb-4 md:mb-0">
        <Link href="/">Movie-App</Link>
      </h2>

      {/* <div className="header__controls">
        <SwitchLang />
        {isAuthenticated ? (
          viewsContext
            ? mobileControlsView
            : <FadeMenu menuItems={desktopControlsView} />
        ) : (
          <>
            <ButtonNav to={{ pathname: "/login", state: { from: location } }}>
              {t("common.logIn")}
            </ButtonNav>
            <ButtonNav to={{ pathname: "/signup", state: { from: location } }}>
              {t("common.signUp")}
            </ButtonNav>
          </>
        )}
      </div> */}
      <div className="flex justify-between gap-y-4 md:gap-y-0 md:gap-x-4 md:mr-20 flex-col md:flex-row">
        <ButtonNav href="/login">
          {"Log in".toLocaleUpperCase()}
        </ButtonNav>
        <ButtonNav href="/signup">
          {"Sign up".toLocaleUpperCase()}
        </ButtonNav>
      </div>
    </header>
  );
};
