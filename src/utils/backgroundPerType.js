export const backgroundPerType = (type) => {
    switch (type) {
      case 'normal':
        return {backgroundColor: 'grey'}
      case 'fighting':
        return {backgroundColor: 'darkred'}
      case 'flying':
        return {backgroundColor: 'azure'}
      case 'poison':
        return {backgroundColor: 'darkmagenta'}
      case 'ground':
        return {backgroundColor: 'moccasin'}
      case 'rock':
        return {backgroundColor: 'goldenrod'}
      case 'bug':
        return {backgroundColor: 'olive'}
      case 'ghost':
        return {backgroundColor: 'darkslateblue'}
      case 'steel':
        return {backgroundColor: 'gainsboro'}
      case 'fire':
        return {backgroundColor: 'darkorange'}
      case 'water':
        return {backgroundColor: 'dodgerblue'}
      case 'grass':
        return {backgroundColor: 'greenyellow'}
      case 'electric':
        return {backgroundColor: 'gold'}
      case 'psychic':
        return {backgroundColor: 'deeppink'}
      case 'ice':
        return {backgroundColor: 'darkturquoise'}
      case 'dragon':
        return {backgroundColor: 'orangered'}
      case 'dark':
        return {backgroundColor: '#155358'}
      case 'fairy':
        return {backgroundColor: 'hotpink'}
      case 'unknown':
        return {backgroundColor: 'white'}
      case 'shadow':
        return {backgroundColor: 'gainsboro'}
      default:
        return {backgroundColor: 'yellow'};
    }
  }