import {View, Modal} from 'react-native';
import React from 'react';
import {updateTask, storeTask} from '../../Services/Task';
import {styles} from './Style';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TaskModal = ({
  setIsLoading,
  setIsVisible,
  setSelectedItems,
  setTask,
  selectedItems,
  isVisible,
  task,
  isLoading,
  uid,
}) => {
  return (
    <View style={styles.isVisible}>
      <Modal transparent visible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modalMain}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
                setSelectedItems([]);
                setTask({title: '', description: ''});
              }}
              hitSlop={styles.hitSlope}
              style={styles.icon}>
              <Entypo color="black" name="squared-cross" size={25} />
            </TouchableOpacity>
            <InputField
              lable="Enter Title"
              placeholder="Task Title"
              value={task?.title}
              onChangeText={v => setTask({...task, title: v})}
            />
            <InputField
              lable="Enter Description"
              placeholder="Task Description"
              multiline
              des
              value={task?.description}
              onChangeText={v => setTask({...task, description: v})}
            />
            <Button
              loader={isLoading}
              disabled={
                task?.title == '' || task?.description == '' || isLoading
              }
              modal
              title={selectedItems?.length == 1 ? 'Update Task' : 'Post Task'}
              onPress={async () => {
                setIsLoading(true);
                if (selectedItems?.length == 1) {
                  await updateTask(
                    uid,
                    selectedItems[0]?.id,
                    task?.title,
                    task?.description,
                    setIsVisible,
                  );
                  setSelectedItems([]);
                } else {
                  await storeTask(uid, task?.title, task?.description);
                }
                setIsLoading(false);
                setIsVisible(false);
                setTask({title: '', description: ''});
                setSelectedItems([]);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskModal;
