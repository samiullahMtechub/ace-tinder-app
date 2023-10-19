import {View, Text, ScrollView, Row} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';

const PrivacyPolicy = () => {
  // const
  return (
    <View bg={'black'} flex={1}>
      <Header title={'Privacy Policy'} />
      <View mt={5} mx={5} mb={10}>
        <ScrollView>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in mtechub llc. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Text>
          <Text color={'white'} fontSize={18} fontFamily={'Jost-Medium'} mb={5}>
            Information we collect
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide. When you register for an
            Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </Text>
          <Text color={'white'} fontSize={18} fontFamily={'Jost-Medium'} mb={5}>
            How we use your information
          </Text>
          <Text color={'white'} mb={5} fontFamily={'Jost-Regular'}>
            We use the information we collect in various ways, including to.
          </Text>
          <View ml={2}>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Provide, operate, and maintain our website
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Improve, personalize, and expand our website
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Understand and analyze how you use our website
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Develop new products, services, features, and functionality
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Send you emails
              </Text>
            </Row>
            <Row alignItems={'center'} mb={5}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                Find and prevent fraud
              </Text>
            </Row>
          </View>

          <Text color={'white'} fontSize={18} fontFamily={'Jost-Medium'} mb={5}>
            Log Files
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            standard procedure of using log files. These files log visitors when
            they visit websites. All hosting companies do this and a part of
            hosting services' analytics. The information collected by log files
            include internet protocol (IP) addresses, browser type, Internet
            Service Provider (ISP), date and time stamp, referring/exit pages,
            and possibly the number of clicks. These are not linked to any
            information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site,
            tracking users' movement on the website, and gathering demographic
            information.
          </Text>
          <Text color={'white'} fontSize={18} fontFamily={'Jost-Medium'} mb={5}>
            Cookies and Web Beacons
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            Like any other website, mtechub llc uses 'cookies'. These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
export default PrivacyPolicy;
