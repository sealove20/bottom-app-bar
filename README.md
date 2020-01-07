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
        <BottomAppButton 
            label={"Rooms"} 
            buttonColor={"#4287f5"} 
            iconName={"location-on"} 
            iconColor={"#000"} 
            click={() => console.log("Rooms click")}
        />
        <BottomAppButton 
            label={"Spaces"} 
            buttonColor={"rgba(66, 135, 245, 0.5)"}
            iconName={"local-bar"} 
            iconColor={"#f00"} 
            click={() => console.log("Spaces click")}
        />
    </BottomAppContainer>
</View>
```

## Documentation

### Bottom App Container Component
| Name                      | Description                              | Default     | Type   |
|---------------------------|------------------------------------------|-------------|--------|
| barColor | Bottom bar color | #4c8bf5 | String |
| buttonColor | Main button color | #f00 | String |

### Bottom App Button Component
| Name                      | Description                              | Default     | Type   |
|---------------------------|------------------------------------------|-------------|--------|
| label | Button label | "" | String |
| buttonColor | Button color | #4c8bf5 | String |
| iconColor | Button icon color | #000 | String |
| iconName | Material Community Icons Vector Icons name | add | String |
| labelColor | Color of the button label | #fff | String
| fontSize | Size of the font | Android/IOS default | Number |
| click | Function Called when the button is pressed | null | Func |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author
Matheus Henrique | [linkedin](https://www.linkedin.com/in/matheus-henrique-176683151/)

## License
[MIT](./LICENSE)
