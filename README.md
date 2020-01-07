# bottom-app-bar

A customizable React Native component based on material design bottom app bar.

## Installation

If using yarn:

```
yarn add bottom-app-bar
```

If using npm:

```
npm i bottom-app-bar
```

## Usage

```
import { BottomAppContainer, BottomAppButton } from 'bottom-app-bar';
```

Simply place a `<BottomAppButton />` tag for each desired button within the `<BottomAppContainer />` wrapper. You can place a total of 4 buttons.

```
<View style={{flex: 1}}>
    <BottomAppContainer>
        <BottomAppButton />
        <BottomAppButton />
        <BottomAppButton />
        <BottomAppButton />
    </BottomAppContainer>
</View>
```
