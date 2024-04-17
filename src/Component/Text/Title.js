import {Text} from 'react-native';

const Title = ({
  fsize,
  fweight,
  col,
  key,
  lable,
  textDecorationLine,
  ...rest
}) => {
  return (
    <Text
      key={key}
      style={{
        fontSize: fsize,
        fontWeight: fweight,
        color: col,
        textDecorationLine: textDecorationLine,
        textAlign: 'justify',
      }}
      {...rest}>
      {lable}
    </Text>
  );
};

export default Title;
