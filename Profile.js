import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  DatePickerAndroid,
  TouchableOpacity,
  Picker,
} from "react-native";
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Fontisto,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: "rtrtr",
      dateValue: "23-04-2020",
      email: "email@email.com",
      fatherName: "Ismail Sultan",
      spouse: "Ismail Sultan",
      nationality: "Saudi Arabian",
      birthPlace: "Khamis",
      present: "King saud Rd",
      permanent: "King saud Rd",
      joinDate: "23-04-2020",
      confirmDate: "23-04-2020",
      probation: "23-04-2020",
      notice: "23-04-2020",

      data: [
        {
          id: "1",
          name: "B Positive",
        },
        {
          id: "2",
          name: "O Positive",
        },
      ],
    };
  }

  dateClick = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              elevation: 5,
              height: height * 0.1,
              flexDirection: "row",
              backgroundColor: "#ffffff",
              justifyContent: "space-between",
              paddingRight: width * 0.04,
              paddingLeft: width * 0.04,
              paddingTop: width * 0.06,
              marginBottom: width * 0.03,
            }}
          >
            <View>
              <AntDesign name="arrowleft" size={width * 0.07} color="#9bbde4" />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: width * 0.05 }}>
                Profile
              </Text>
            </View>
            <View>
              <MaterialIcons
                name="notifications-none"
                size={width * 0.06}
                color="#fbc02d"
              />
            </View>
          </View>

          <View
            style={{
              height: height * 0.17,
              width: width * 0.9,
              borderRadius: width * 0.02,
              backgroundColor: "#002f6c",
              alignSelf: "center",
              marginTop: height * 0.08,
            }}
          >
            <View
              style={{
                paddingLeft: width * 0.08,
                paddingTop: width * 0.06,
              }}
            >
              <Text style={{ color: "#fff" }}>Profile Info</Text>
              <Text style={{ color: "#fff" }}>69%</Text>
            </View>
            <View style={{ alignItems: "center", paddingTop: width * 0.06 }}>
              <Text style={{ color: "#fff", fontWeight: "700" }}>
                Mr. Mohammad Sultan
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                height: width * 0.29,
                width: width * 0.29,
                borderRadius: width * 0.2,
                top: -width * 0.1,
                backgroundColor: "#ffffff",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  height: width * 0.27,
                  width: width * 0.27,
                  borderRadius: width * 0.2,
                  borderWidth: 1,
                  borderColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{
                    uri:
                      "data:image/jpeg;base64,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",
                  }}
                  style={{
                    height: width * 0.25,
                    width: width * 0.25,
                    borderRadius: width * 0.2,
                  }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  height: width * 0.08,
                  width: width * 0.08,
                  borderRadius: width * 0.1,
                  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  bottom: width * 0.03,
                }}
              >
                <AntDesign name="camera" size={width * 0.05} />
              </View>
            </View>
          </View>
          <View
            style={{
              // elevation: 1,
              // backgroundColor: "red",
              alignSelf: "center",
              width: width * 0.83,
              borderRadius: width * 0.01,
              paddingBottom: width * 0.02,
            }}
          >
            <TitleTag title={"Personal Information"} />
            <DatePickers
              title="Date Of Birth"
              dateClick={() => this.dateClick()}
              value={this.state.dateValue}
            />
            <ModelTextInput
              title="Personal Email"
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <ModelTextInput
              title="Father Name"
              value={this.state.fatherName}
              onChangeText={(text) => this.setState({ fatherName: text })}
            />
            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <ModelPicker
                title={"Blood Group"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
              <ModelPicker
                title={"Marital Status"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
            </View>
            <ModelTextInput
              title="Spouse Name"
              value={this.state.spouse}
              onChangeText={(text) => this.setState({ spouse: text })}
            />
            <DatePickers
              title="Marriage Date"
              dateClick={() => this.dateClick()}
              value={this.state.dateValue}
            />
            <ModelTextInput
              title="Nationality"
              value={this.state.nationality}
              onChangeText={(text) => this.setState({ nationality: text })}
            />
            <ModelTextInput
              title="Place Of Birth"
              value={this.state.birthPlace}
              onChangeText={(text) => this.setState({ birthPlace: text })}
            />
            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <ModelPicker
                title={"Country Or Origin"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
              <ModelPicker
                title={"Religion"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <ModelPicker
                title={"International Employee"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
              <ModelPicker
                title={"Physically Chalenged"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
            </View>
          </View>

          <View
            style={{
              alignSelf: "center",
              width: width * 0.83,
              borderRadius: width * 0.01,
              paddingBottom: width * 0.02,
            }}
          >
            <TitleTag title={"Address"} />
            <ModelTextInput
              title="Present"
              value={this.state.present}
              onChangeText={(text) => this.setState({ present: text })}
            />
            <ModelTextInput
              title="Permanent"
              value={this.state.permanent}
              onChangeText={(text) => this.setState({ permanent: text })}
            />
            <ModelCon title={"Contact Number"} />
            <ModelCon title={"Emergency Contact Number"} />
          </View>
          <View
            style={{
              alignSelf: "center",
              width: width * 0.83,
              borderRadius: width * 0.01,
              paddingBottom: width * 0.02,
            }}
          >
            <TitleTag title="Joining Details" />
            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <ModelTextInput
                title="Joined Date"
                width={width * 0.37}
                value={this.state.joinDate}
                onChangeText={(text) => this.setState({ joinDate: text })}
              />
              <ModelTextInput
                title="Conformation Date"
                width={width * 0.37}
                value={this.state.confirmDate}
                onChangeText={(text) => this.setState({ confirmDate: text })}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <ModelTextInput
                title="Probation Period"
                width={width * 0.37}
                value={this.state.probation}
                onChangeText={(text) => this.setState({ probation: text })}
              />
              <ModelTextInput
                title="Notice Period"
                width={width * 0.37}
                value={this.state.notice}
                onChangeText={(text) => this.setState({ notice: text })}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: width * 0.8,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <ModelPicker
                title={"Current Exp"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
              <ModelPicker
                title={"Previous Exp"}
                data={this.state.data}
                mainValue={this.state.pickerValue}
                pickerValue={(itemValue) =>
                  this.setState({ pickerValue: itemValue })
                }
              />
            </View>
          </View>
          <View
            style={{
              elevation: 3,
              backgroundColor: "#ffffff",
              padding: width * 0.02,
            }}
          >
            <TouchableOpacity
              style={{
                height: height * 0.05,
                width: width * 0.8,
                borderRadius: width * 0.01,
                backgroundColor: "orange",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const ModelTextInput = (props) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <View>
        <Text>{props.title}</Text>
      </View>
      <View
        style={{
          height: height * 0.05,
          width: props.width ? props.width : width * 0.8,
          borderRadius: width * 0.01,
          backgroundColor: "#b7b7b7",
          paddingLeft: width * 0.02,
          // backgroundColor: "red",
        }}
      >
        <TextInput
          style={{ width: width * 0.75 }}
          value={props.value}
          onChangeText={(text) => props.onChangeText(text)}
        />
      </View>
    </View>
  );
};

const TitleTag = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: width * 0.03,
        paddingLeft: width * 0.03,
        paddingTop: width * 0.03,
        alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: width * 0.08,
            width: width * 0.08,
            borderRadius: width * 0.12,
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fontisto name="person" size={width * 0.05} color="#fff" />
        </View>
        <View style={{ paddingLeft: width * 0.03, width: width * 0.4 }}>
          <Text>{props.title}</Text>
        </View>
      </View>
      <View>
        <FontAwesome name="caret-up" size={width * 0.06} color="#002f6c" />
      </View>
    </View>
  );
};

const DatePickers = (props) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <View>
        <Text>{props.title}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: height * 0.05,
          width: width * 0.8,
          borderRadius: width * 0.01,
          backgroundColor: "#b7b7b7",
          paddingLeft: width * 0.02,
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "red",
        }}
        onPress={() => props.dateClick()}
      >
        <Text style={{ width: width * 0.7 }}>{props.value}</Text>
        <View>
          <AntDesign name="calendar" size={width * 0.05} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ModelPicker = (props) => {
  return (
    <View>
      <View>
        <Text>{props.title}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#b7b7b7",
          height: height * 0.05,
          width: width * 0.37,
          borderRadius: width * 0.01,
        }}
      >
        <Picker
          selectedValue={props.mainValue}
          style={{ height: height * 0.05, width: width * 0.37 }}
          onValueChange={(itemValue, itemIndex) => props.pickerValue(itemValue)}
        >
          {props.data.map((item, i) => {
            return <Picker.Item label={item.name} value={item.name} />;
          })}
        </Picker>
      </View>
    </View>
  );
};

const ModelCon = (props) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <View>
        <Text>{props.title}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.14,
            borderRadius: width * 0.01,
            backgroundColor: "#b7b7b7",
            paddingLeft: width * 0.02,
            marginRight: width * 0.02,
            // backgroundColor: "red",
          }}
        >
          <TextInput style={{ width: width * 0.14 }} value={"+966"} />
        </View>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.63,
            borderRadius: width * 0.01,
            backgroundColor: "#b7b7b7",
            paddingLeft: width * 0.02,
            // backgroundColor: "red",
          }}
        >
          <TextInput style={{ width: width * 0.63 }} value={props.title} />
        </View>
      </View>
    </View>
  );
};
