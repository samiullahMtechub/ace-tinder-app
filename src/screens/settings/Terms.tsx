import {View, Text, ScrollView, Row} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import {ImageBackground} from 'react-native';

const Terms = () => {
  // const
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <Header title={'Terms & Conditions'} />
      <View mt={5} mx={5} mb={10}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </Text>
          <Text color={'white'} fontSize={18} fontFamily={'Jost-Medium'} mb={5}>
            Cookies
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            We employ the use of cookies. By accessing M techub llc, you agreed
            to use cookies in agreement with the product's Privacy Policy. Most
            interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </Text>
          <Text color={'white'} fontSize={18} fontFamily={'Jost-Medium'} mb={5}>
            License
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={1}>
            Unless otherwise stated,product and/or its licensors own the
            intellectual property rights for all material on All intellectual
            property rights are reserved. You may access this for your own
            personal use subjected to restrictions set in these terms and
            conditions This Agreement shall begin on the date hereof. Our Terms
            and Conditions were created with the help of the Free Terms and
            Conditions Generator.
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={1}>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            product does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of product,its agents and/or affiliates. Comments reflect
            the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, product shall
            not be liable for the Comments or for any liability,
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={1}>
            damages or expenses caused and/or suffered as a result of any use of
            and/or posting of and/or appearance of the Comments on this website.
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={1}>
            product reserves the right to monitor all Comments and to remove any
            Comments which can be considered inappropriate,offensive or causes
            breach of these Terms and Conditions.
          </Text>
          <Text
            color={'txtColor'}
            fontSize={15}
            mb={5}
            fontFamily={'Jost-Regular'}>
            You warrant and represent that:
          </Text>
          <View ml={2}>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent or trademark of
                any third party;
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material which is an invasion of
                privacy
              </Text>
            </Row>
            <Row alignItems={'center'}>
              <Text color={'white'} alignSelf={'flex-start'} mr={2}>
                .
              </Text>
              <Text color={'txtColor'} my={1}>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </Text>
            </Row>
          </View>
          <Text
            color={'txtColor'}
            fontSize={15}
            fontFamily={'Jost-Regular'}
            mb={5}>
            Unless otherwise stated,product and/or its licensors own the
            intellectual property rights for all material on All intellectual
            property rights are reserved. You may access this for your own
            personal use subjected to restrictions set in these terms and
            conditions This Agreement shall begin on the date hereof. Our Terms
            and Conditions were created with the help of the Free Terms and
            Conditions Generator. Parts of this website offer an opportunity for
            users to post and exchange opinions and information in certain areas
            of the website. product does not filter, edit, publish or review
            Comments prior to their presence on the website. Comments do not
            reflect the views and opinions of product,its agents and/or
            affiliates. Comments reflect the views and opinions of the person
            who post their views and opinions. To the extent permitted by
            applicable laws, product shall not be liable for the Comments or for
            any liability, damages or expenses caused and/or suffered as a
            result of any use of and/or posting of and/or appearance of the
            Comments on this website. product reserves the right to monitor all
            Comments and to remove any Comments which can be considered
            inappropriate, offensive or causes breach of these Terms and
            Conditions. You warrant and represent that: You are entitled to post
            the Comments on our website and have all necessary licenses and
            consents to do so; The Comments do not invade any intellectual
            property right, including without limitation copyright, patent or
            trademark of any third party; The Comments do not contain any
            defamatory, libelous, offensive, indecent or otherwise unlawful
            material which is an invasion of privacy The Comments will not be
            used to solicit or promote business or custom or present commercial
            activities or unlawful activity. You hereby grant product a
            non-exclusive license to use, reproduce, edit and authorize others
            to use, reproduce and edit any of your Comments in any and all
            forms, formats or media.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default Terms;
