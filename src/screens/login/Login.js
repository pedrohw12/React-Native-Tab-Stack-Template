import React from 'react';
import { Page, Text, Button } from './styles';
import { StackActions, NavigationActions } from 'react-navigation';

export default (props) => {
  const handleLogin = () => {
    const resetAction = StackActions.reset({
      index:0,
      actions:[
        NavigationActions.navigate({routeName:'HomeTab'})
      ],
    });

    props.navigation.dispatch(resetAction);
  }

  return (
    <Page>
      <Text>Página de LOGIN</Text>
      <Button title="Logar" onPress={handleLogin} />
    </Page>
  );
};
 