import React from 'react';
import { Page, Text, Button } from './styles';

export default (props) => {
  return (
    <Page>
      <Text>Página HOME</Text>
      <Button title="Perfil" onPress={()=>props.navigation.navigate('Perfil')} />
    </Page>
  );
};