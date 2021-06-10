import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

import MainButton from "../components/buttons/main-button";
import Description from "../components/typography/description";
import Heading from "../components/typography/heading";
import { Screens } from "../screens";
import Color from "../shared/colors";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ marginHorizontal: 56, marginTop: 56 }}>
        <View
          style={{
            borderLeftWidth: 4,
            borderLeftColor: Color["black-16"],
            padding: 6,
            marginTop: 64,
          }}
        >
          <Heading>Audio zprávy</Heading>
        </View>
        <Description style={{ marginTop: 28 }}>
          Všechny zprávy ze všech zpravodajských portálů pro Vás jako audio.
          Pusťte si 30s ukázky zadarmo nebo si kupte kredity a poslechněte si
          dlouhou verzi. Stačí si jen naklikat frontu zpráv nebo nechte výběr na
          naší umělé inteligenci, která se neustále učí z Vašich reakcí.
        </Description>
      </View>
      <View style={{ marginHorizontal: 48, marginBottom: 56 }}>
        <MainButton onPress={() => navigation.navigate(Screens.topics)}>
          Nastavit témata
        </MainButton>
        <View
          style={{
            display: "none",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoLight",
              fontWeight: "300",
              color: Color["black-100"],
            }}
          >
            Už máte účet?
          </Text>
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 3 }}>
            <Text
              style={{ fontFamily: "RobotoBold", color: Color["black-100"] }}
            >
              Přihlaste se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
