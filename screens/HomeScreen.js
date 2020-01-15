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

// const data = {
//   carwashs: [
//     {
//       id: 1,
//       name: 'Blesk',
//       location: '34.324234',
//       city: 'Tashkent'
//     },
//     {
//       id: 2,
//       name: 'Blesk2',
//       location: '34.324234',
//       city: 'Tashkent'
//     },
//     {
//       id: 3,
//       name: 'Blesk3',
//       location: '34.324234',
//       city: 'Tashkent'
//     }
//   ],
//   user: {},
//   reservations: [{}]
// };

const initialState = [
  {
    id: 1,
    name: 'Blesk',
    location: '34.324234',
    city: 'Tashkent'
  },
  {
    id: 2,
    name: 'Blesk2',
    location: '34.324234',
    city: 'Tashkent'
  },
  {
    id: 3,
    name: 'Blesk3',
    location: '34.324234',
    city: 'Tashkent'
  }
];

export default function HomeScreen(props) {
  const { navigate } = props.navigation;

  return (
    <Container>
      <Header>
        <Body>
          <Title>Header</Title>
        </Body>
      </Header>
      <Content>
        <List>
          {initialState.map(carwash => (
            <ListItem key={carwash.id} thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>{carwash.name}</Text>
                <Text note numberOfLines={1}>
                  {carwash.city}
                </Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() =>
                    navigate('Carwash', {
                      companyDetails: { name: carwash.name, city: carwash.city }
                    })
                  }
                >
                  <Text>dsdss</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
        <Text>This is Content Sfdsecfdasftion</Text>
      </Content>
    </Container>
  );
}

HomeScreen.navigationOptions = {
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
