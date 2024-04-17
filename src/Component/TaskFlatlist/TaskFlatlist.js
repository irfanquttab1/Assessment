import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import Title from '../Text/Title';
import {styles} from './Style';
import {getTasks} from '../../Services/Task';
import Placeholder from '../Placeholder/Placeholder';
import LottieView from 'lottie-react-native';

const TaskFlatlist = ({
  selectedItems,
  setSelectedItems,
  userData,
  setUserData,
  uid,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const onDataChange = userData => {
      setUserData(userData?.tasks || []);
      setLoading(false);
    };
    getTasks(uid, onDataChange);
  }, []);
  const renderTaskItem = ({item}) => {
    const isSelected = selectedItems?.some(
      selectedItem => selectedItem?.id === item?.id,
    );
    return (
      <TouchableOpacity
        onPress={() => {
          selectedItems?.length !== 0 && toggleSelection(item);
        }}
        onLongPress={() => {
          selectedItems?.length === 0 && toggleSelection(item);
        }}>
        <View style={styles.renderTask}>
          <View style={styles.renderItem}>
            <Title lable={item?.title} fsize={16} fweight={'500'} />
            <Title lable={item?.description} fsize={14} fweight={'400'} />
          </View>
          {isSelected && (
            <FontAwesome5 color="teal" name="check-circle" size={25} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const toggleSelection = selectedItem => {
    const isSelected = selectedItems?.some(
      item => item?.id === selectedItem?.id,
    );

    if (isSelected) {
      setSelectedItems(
        selectedItems?.filter(item => item?.id !== selectedItem?.id),
      );
    } else {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  if (loading) {
    return <Placeholder number={8} />;
  }
  return userData?.length === 0 ? (
    <View style={styles.emptyDataView}>
      <LottieView
        style={styles.lottie}
        source={require('../../Assets/NoData.json')}
        autoPlay
        loop
      />
    </View>
  ) : (
    <FlatList
      data={userData}
      renderItem={renderTaskItem}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContain}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default TaskFlatlist;
