import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {deleteTasks, getTasks} from '../../Services/Task';
import {useDispatch, useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './Style';
import TaskModal from '../../Component/TaskModal/TaskModal';
import TaskFlatlist from '../../Component/TaskFlatlist/TaskFlatlist';
import {dispatchRememberMe, dispatchUid} from '../../redux/Slicee';
import {showToast} from '../../Component/Toast/Toast';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.todos);
  const [userData, setUserData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    if (selectedItems?.length !== 0) {
      setTask({
        title: selectedItems[0]?.title,
        description: selectedItems[0]?.description,
      });
    }
  }, [selectedItems]);

  const handleDeleteTasks = async () => {
    await deleteTasks(uid, selectedItems, setIsVisible);
    setSelectedItems([]);
  };

  const HeaderIcons = () => (
    <View style={styles.headerIcon}>
      {selectedItems.length === 1 && (
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Update Task',
              'Are you sure you want to update this task?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Update',
                  onPress: () => setIsVisible(true),
                },
              ],
              {cancelable: false},
            )
          }>
          <MaterialCommunityIcons
            color="white"
            name={'circle-edit-outline'}
            size={25}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Delete Task',
            'Are you sure you want to delete this task?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Delete',
                onPress: () => handleDeleteTasks(),
              },
            ],
            {cancelable: false},
          )
        }>
        <MaterialCommunityIcons color="white" name={'delete'} size={25} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.main}>
      {selectedItems.length > 0 && <HeaderIcons />}
      <TaskFlatlist
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        userData={userData}
        setUserData={setUserData}
        uid={uid}
      />
      <TouchableOpacity
        onPress={() => {
          setTask({title: '', description: ''});
          setSelectedItems([]);
          setIsVisible(true);
        }}
        onLongPress={() =>
          Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Logout',
                onPress: () => {
                  dispatch(dispatchRememberMe(false));
                  dispatch(dispatchUid(''));
                  showToast(
                    'You have been logout succefully.',
                    'success',
                    () => {
                      navigation.replace('Login');
                    },
                  );
                },
              },
            ],
            {cancelable: false},
          )
        }
        style={styles.addTask}>
        <AntDesign color="white" name="plus" size={35} />
      </TouchableOpacity>
      {isVisible && (
        <TaskModal
          setIsLoading={setIsLoading}
          setIsVisible={setIsVisible}
          setSelectedItems={setSelectedItems}
          setTask={setTask}
          selectedItems={selectedItems}
          isVisible={isVisible}
          task={task}
          isLoading={isLoading}
          uid={uid}
        />
      )}
    </View>
  );
};

export default Home;
