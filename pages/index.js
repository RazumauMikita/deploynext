import React from "react";
import { useRouter } from "next/router";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Flex, View } from "@aws-amplify/ui-react";

import { Footer, Hero, Persuade, TestimonyCollection } from "../ui-components";
import Layout from "../component/Layout";

function Index() {
  const router = useRouter();

  return (
    <Layout>
      <View marginBottom='135px'>
        <Hero
          handleClick={() => {
            router.push("/post");
          }}
        />
      </View>
      <View>
        <TestimonyCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner='https://i.imgur.com/MxbD3N4.png' />
      </Flex>
      <View marginTop='50px' marginBottom='50px'>
        <Footer />
      </View>
    </Layout>
  );
}
export default withAuthenticator(Index);
