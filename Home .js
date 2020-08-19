import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          icon: <Fontisto name="email" size={width * 0.13} color="#558fd1" />,
          name: "payslips",
        },
        {
          id: "2",
          icon: <Fontisto name="email" size={width * 0.13} color="#558fd1" />,
          name: "Request",
        },
        {
          id: "3",
          icon: <Fontisto name="email" size={width * 0.13} color="#558fd1" />,
          name: "Documents",
        },
        {
          id: "4",
          icon: <Fontisto name="email" size={width * 0.13} color="#558fd1" />,
          name: "Reimbursement",
        },
        {
          id: "5",
          icon: <Fontisto name="email" size={width * 0.13} color="#558fd1" />,
          name: "Vacations",
        },
        {
          id: "6",
          icon: <Fontisto name="email" size={width * 0.13} color="#558fd1" />,
          name: "TimeSheet",
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 0.35,
              backgroundColor: "#101d26",
              paddingBottom: width * 0.02,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: width * 0.06,
                height: height * 0.13,
                // backgroundColor: "red",
                alignItems: "center",
              }}
            >
              <View>
                <MaterialIcons name="menu" size={width * 0.08} color="#fff" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{
                    uri:
                      "https://img.icons8.com/color/48/000000/restaurant-table.png",
                  }}
                  style={{ height: width * 0.1, width: width * 0.1 }}
                />
                <Text style={{ color: "#fff" }}>HRMS LOG</Text>
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
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  height: width * 0.35,
                  width: width * 0.35,
                  borderRadius: width * 0.5,
                  //   backgroundColor: "grey",
                  borderWidth: 2,
                  borderColor: "#fff",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    height: width * 0.3,
                    width: width * 0.3,
                    borderRadius: width * 0.5,
                    backgroundColor: "#fff",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: width * 0.035 }}>17-12-2019</Text>
                    <Text style={{ fontSize: width * 0.035 }}>9:41am</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      backgroundColor: "orange",
                      borderBottomRightRadius: width * 0.2,
                      borderBottomLeftRadius: width * 0.2,
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: width * 0.045 }}>
                      Inactive
                    </Text>
                    <Text style={{ color: "#fff", fontSize: width * 0.03 }}>
                      Reach Location{" "}
                    </Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={{ color: "#fff" }}>You are 2.3km away from </Text>
                <View>
                  <Text style={{ color: "#fff" }}>Jazeera Paints</Text>
                </View>
                <View>
                  <Text style={{ color: "#fff" }}>
                    Sumayra, Riyadh,SA, 12361.{" "}
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", paddingTop: width * 0.01 }}
                >
                  <View style={{ paddingRight: width * 0.02 }}>
                    <MaterialIcons
                      name="home"
                      size={width * 0.06}
                      color="#fbc02d"
                    />
                  </View>
                  <Text style={{ color: "#fff" }}>Primary Office Location</Text>
                </View>

                <View style={{ paddingTop: width * 0.02 }}>
                  <TouchableOpacity
                    style={{
                      height: height * 0.05,
                      width: width * 0.55,
                      borderRadius: width * 0.014,
                      backgroundColor: "#fbc02d",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: width * 0.037 }}>
                        My Accessable Locations
                      </Text>
                    </View>
                    <View>
                      <Entypo
                        name="location"
                        size={width * 0.06}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.62 }}>
            <View style={{ padding: width * 0.02 }}>
              <Text style={{ color: "#558fd1" }}>Leave balance</Text>
            </View>
            <LeaveBal />

            <View style={{ padding: width * 0.02 }}>
              <Text style={{ color: "#558fd1" }}>Late logins</Text>
            </View>
            <LateLog />

            <View style={{ padding: width * 0.02 }}>
              <Text style={{ color: "#558fd1" }}>Quick Links</Text>
            </View>
            <QuickLink data={this.state.data} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const LeaveBal = (props) => {
  return (
    <View
      style={{
        elevation: 5,
        height: height * 0.12,
        borderLeftWidth: 3,
        borderLeftColor: "#fbc02d",
        width: width * 0.9,
        borderRadius: width * 0.02,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          borderRightWidth: 2,
          marginTop: width * 0.04,
          marginBottom: width * 0.04,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: width * 0.1 }}>18</Text>
        <View>
          <Text style={{ fontSize: width * 0.04 }}>Casual</Text>
        </View>
      </View>
      <View
        style={{
          borderRightWidth: 2,
          marginTop: width * 0.04,
          marginBottom: width * 0.04,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: width * 0.1 }}>18</Text>
        <View>
          <Text style={{ fontSize: width * 0.04 }}>Sick</Text>
        </View>
      </View>
      <View
        style={{
          borderRightWidth: 2,
          marginTop: width * 0.04,
          marginBottom: width * 0.04,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: width * 0.1 }}>18</Text>
        <View>
          <Text style={{ fontSize: width * 0.04 }}>Paternity</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            height: height * 0.04,
            width: width * 0.18,
            borderRadius: width * 0.02,
            backgroundColor: "#fbc02d",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LateLog = (props) => {
  return (
    <View
      style={{
        elevation: 5,
        height: height * 0.14,
        borderLeftWidth: 3,
        borderLeftColor: "#fbc02d",
        width: width * 0.9,
        borderRadius: width * 0.02,
        alignSelf: "center",
        backgroundColor: "#ffffff",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          borderRightWidth: 2,
          marginTop: width * 0.04,
          marginBottom: width * 0.04,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ color: "#558fd1" }}>Today</Text>
        </View>
        <Text style={{ fontSize: width * 0.1 }}>18</Text>
        <View>
          <Text style={{ fontSize: width * 0.04 }}>0 hrs</Text>
        </View>
      </View>
      <View
        style={{
          borderRightWidth: 2,
          marginTop: width * 0.04,
          marginBottom: width * 0.04,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ color: "#558fd1" }}>This Week</Text>
        </View>
        <Text style={{ fontSize: width * 0.1 }}>18</Text>
        <View>
          <Text style={{ fontSize: width * 0.04 }}>2.4 hrs</Text>
        </View>
      </View>
      <View
        style={{
          borderRightWidth: 2,
          marginTop: width * 0.04,
          marginBottom: width * 0.04,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ color: "#558fd1" }}>This Month</Text>
        </View>
        <Text style={{ fontSize: width * 0.1 }}>18</Text>
        <View>
          <Text style={{ fontSize: width * 0.04 }}>19.2 hrs</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ width: width * 0.12 }}>
          <Text>View More</Text>
        </View>
        <AntDesign name="right" size={width * 0.04} />
      </TouchableOpacity>
    </View>
  );
};

const QuickLink = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={props.data}
        numColumns={3}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                elevation: 5,
                height: height * 0.16,
                width: width * 0.3,
                backgroundColor: "#ffffff",
                margin: width * 0.01,
                borderLeftWidth: 2,
                borderLeftColor: "#fbc02d",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text>{item.icon}</Text>
              </View>
              <View>
                <Text style={{ color: "#558fd1" }}>{item.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
