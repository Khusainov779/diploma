// import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  ListItem,
  Left,
  Thumbnail,
  List,
  Right,
  Button
} from 'native-base';

export default function CarwashScreen(props) {
  const { navigation } = props;
  const passedParam = navigation.getParam('companyDetails');

  return (
    <Container>
      <Header>
        <Body>
          <Title>{passedParam.name}</Title>
        </Body>
      </Header>
      <Content>
        <Text>
          Located in
          {passedParam.city}
        </Text>
      </Content>
    </Container>
  );
}

CarwashScreen.navigationOptions = {
  header: null
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use useful development
//         tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }
