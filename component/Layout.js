import React from "react";
import { View } from "@aws-amplify/ui-react";
import { Nav } from "../ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Layout({ children, authText, signOut, user }) {
  return (
    <View width='1200px' marginLeft='auto' marginRight='auto'>
      <Nav
        marginTop={"20px"}
        handleAuth={() => {
          signOut();
        }}
        authText={authText}
        username={user.signInDetails.loginId.split("@")[0].toUpperCase()}
      />
      {children}
    </View>
  );
}
export default withAuthenticator(Layout);
