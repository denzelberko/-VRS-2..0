<template>
    <Modal>
      <ModalHeader>
        <h3>Edit Destination</h3>
      </ModalHeader>
      <ModalBody>
        <textarea v-model= "trip.name" rows="1" cols="10" class="textarea1" placeholder = "Name"></textarea> 
        
        <pre></pre>
        <b>SCORES:</b>
        <pre></pre>
        <label for="kidFriendlyScore">Kid Friendly Score (1-10):</label>
        <input v-model= "trip.kidFriendlyScore" id="kidFriendlyScore" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="foodQualityScore">Food Quality Score (1-10):</label>
        <input v-model= "trip.foodQualityScore" id="foodQualityScore" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="priceIndex">Price Index (1-10):</label>
        <input v-model= "trip.priceIndex" id="priceIndex" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="instagramAbilityScore">Instagram-Ability (1-10):</label>
        <input v-model= "trip.instagramAbilityScore" id="instagramAbilityScore" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="hotelQualityScore">Hotel Quality Score (1-10):</label>
        <input v-model= "trip.hotelQualityScore" id="hotelQualityScore" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="attractionScore">Attraction Score (1-10):</label>
        <input v-model= "trip.attractionScore" id="attractionScore" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="safetyScore">Safety Score (1-10):</label>
        <input v-model= "trip.safetyScore" id="safetyScore" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="popularity">Popularity Score (1-10):</label>
        <input v-model= "trip.popularity" id="popularity" type="number" min="1" max="10" size="5">
        <pre></pre>

        <pre></pre>
        <b>GENERAL INFORMATION:</b>
        <pre></pre>
        <label for="weather">Weather:</label>
        <select v-model= "trip.weather" id="weather">
          <option value="Tropical">Tropical</option>
          <option value="Dry">Dry</option>
          <option value="Continental">Continental</option>
          <option value="Temperate">Temperate</option>
          <option value="Cold">Cold</option>
        </select>
        <pre></pre>
        <label for="nativeLanguage">Native Language:</label>
        <select v-model= "trip.nativeLanguage" id="nativeLanguage" >
          <option value="English">English</option>
          <option value="Other">Other</option>
        </select>
        <pre></pre>
        <label for="purpose">Purpose:</label>
        <select v-model= "trip.purpose" id="purpose">
          <option value="Sightseeing">Sightseeing</option>
          <option value="Relaxation">Relaxation</option>
          <option value="Nature">Nature</option>
        </select>
        <pre></pre>
        <label for="recTripLength">Recommend Trip Length:</label>
        <select v-model= "trip.recTripLength" id="recTripLength">
          <option value="weekend">weekend</option>
          <option value="one week">one week</option>
          <option value="over a week">over a week</option>
        </select>
        <pre></pre>
        <label for="country">Country:</label>
        <select v-model= "trip.country" id="country">
          <option value="Afghanistan">Afghanistan</option>
          <option value="Aland Islands">Åland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua & Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bonaire, Sint Eustatius and Saba">Caribbean Netherlands</option>
          <option value="Bosnia and Herzegovina">Bosnia & Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
          <option value="Brunei Darussalam">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">Central African Republic</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo">Congo - Brazzaville</option>
          <option value="Congo, Democratic Republic of the Congo">Congo - Kinshasa</option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Cote D'Ivoire">Côte d’Ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Curacao">Curaçao</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czechia</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands (Malvinas)">Falkland Islands (Islas Malvinas)</option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern Territories">French Southern Territories</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-Bissau">Guinea-Bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and Mcdonald Islands">Heard & McDonald Islands</option>
          <option value="Holy See (Vatican City State)">Vatican City</option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran, Islamic Republic of">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Isle of Man">Isle of Man</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, Democratic People's Republic of">North Korea</option>
          <option value="Korea, Republic of">South Korea</option>
          <option value="Kosovo">Kosovo</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Lao People's Democratic Republic">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libyan Arab Jamahiriya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia, Federated States of">Micronesia</option>
          <option value="Moldova, Republic of">Moldova</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar (Burma)</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Netherlands Antilles">Curaçao</option>
          <option value="New Caledonia">New Caledonia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk Island">Norfolk Island</option>
          <option value="Northern Mariana Islands">Northern Mariana Islands</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestinian Territory, Occupied">Palestine</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn">Pitcairn Islands</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="Reunion">Réunion</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Barthelemy">St. Barthélemy</option>
          <option value="Saint Helena">St. Helena</option>
          <option value="Saint Kitts and Nevis">St. Kitts & Nevis</option>
          <option value="Saint Lucia">St. Lucia</option>
          <option value="Saint Martin">St. Martin</option>
          <option value="Saint Pierre and Miquelon">St. Pierre & Miquelon</option>
          <option value="Saint Vincent and the Grenadines">St. Vincent & Grenadines</option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">São Tomé & Príncipe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Serbia and Montenegro">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Sint Maarten">Sint Maarten</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Georgia and the South Sandwich Islands">South Georgia & South Sandwich Islands</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard and Jan Mayen">Svalbard & Jan Mayen</option>
          <option value="Swaziland">Eswatini</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syrian Arab Republic">Syria</option>
          <option value="Taiwan, Province of China">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania, United Republic of">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad & Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks and Caicos Islands">Turks & Caicos Islands</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="United States Minor Outlying Islands">U.S. Outlying Islands</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Viet Nam">Vietnam</option>
          <option value="Virgin Islands, British">British Virgin Islands</option>
          <option value="Virgin Islands, U.s.">U.S. Virgin Islands</option>
          <option value="Wallis and Futuna">Wallis & Futuna</option>
          <option value="Western Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <pre></pre>
        <label for="continent">Continent:</label>
        <select v-model= "trip.continent" id="continent">
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Australia">Australia</option>
        </select>
        <pre></pre>
        <label for="currency">Currency:</label>
        <select  v-model= "trip.currency" id="currency">
          <option>select currency</option>
          <option value="AFN">Afghan Afghani</option>
          <option value="ALL">Albanian Lek</option>
          <option value="DZD">Algerian Dinar</option>
          <option value="AOA">Angolan Kwanza</option>
          <option value="ARS">Argentine Peso</option>
          <option value="AMD">Armenian Dram</option>
          <option value="AWG">Aruban Florin</option>
          <option value="AUD">Australian Dollar</option>
          <option value="AZN">Azerbaijani Manat</option>
          <option value="BSD">Bahamian Dollar</option>
          <option value="BHD">Bahraini Dinar</option>
          <option value="BDT">Bangladeshi Taka</option>
          <option value="BBD">Barbadian Dollar</option>
          <option value="BYR">Belarusian Ruble</option>
          <option value="BEF">Belgian Franc</option>
          <option value="BZD">Belize Dollar</option>
          <option value="BMD">Bermudan Dollar</option>
          <option value="BTN">Bhutanese Ngultrum</option>
          <option value="BTC">Bitcoin</option>
          <option value="BOB">Bolivian Boliviano</option>
          <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
          <option value="BWP">Botswanan Pula</option>
          <option value="BRL">Brazilian Real</option>
          <option value="GBP">British Pound Sterling</option>
          <option value="BND">Brunei Dollar</option>
          <option value="BGN">Bulgarian Lev</option>
          <option value="BIF">Burundian Franc</option>
          <option value="KHR">Cambodian Riel</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CVE">Cape Verdean Escudo</option>
          <option value="KYD">Cayman Islands Dollar</option>
          <option value="XOF">CFA Franc BCEAO</option>
          <option value="XAF">CFA Franc BEAC</option>
          <option value="XPF">CFP Franc</option>
          <option value="CLP">Chilean Peso</option>
          <option value="CNY">Chinese Yuan</option>
          <option value="COP">Colombian Peso</option>
          <option value="KMF">Comorian Franc</option>
          <option value="CDF">Congolese Franc</option>
          <option value="CRC">Costa Rican ColÃ³n</option>
          <option value="HRK">Croatian Kuna</option>
          <option value="CUC">Cuban Convertible Peso</option>
          <option value="CZK">Czech Republic Koruna</option>
          <option value="DKK">Danish Krone</option>
          <option value="DJF">Djiboutian Franc</option>
          <option value="DOP">Dominican Peso</option>
          <option value="XCD">East Caribbean Dollar</option>
          <option value="EGP">Egyptian Pound</option>
          <option value="ERN">Eritrean Nakfa</option>
          <option value="EEK">Estonian Kroon</option>
          <option value="ETB">Ethiopian Birr</option>
          <option value="EUR">Euro</option>
          <option value="FKP">Falkland Islands Pound</option>
          <option value="FJD">Fijian Dollar</option>
          <option value="GMD">Gambian Dalasi</option>
          <option value="GEL">Georgian Lari</option>
          <option value="DEM">German Mark</option>
          <option value="GHS">Ghanaian Cedi</option>
          <option value="GIP">Gibraltar Pound</option>
          <option value="GRD">Greek Drachma</option>
          <option value="GTQ">Guatemalan Quetzal</option>
          <option value="GNF">Guinean Franc</option>
          <option value="GYD">Guyanaese Dollar</option>
          <option value="HTG">Haitian Gourde</option>
          <option value="HNL">Honduran Lempira</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="HUF">Hungarian Forint</option>
          <option value="ISK">Icelandic KrÃ³na</option>
          <option value="INR">Indian Rupee</option>
          <option value="IDR">Indonesian Rupiah</option>
          <option value="IRR">Iranian Rial</option>
          <option value="IQD">Iraqi Dinar</option>
          <option value="ILS">Israeli New Sheqel</option>
          <option value="ITL">Italian Lira</option>
          <option value="JMD">Jamaican Dollar</option>
          <option value="JPY">Japanese Yen</option>
          <option value="JOD">Jordanian Dinar</option>
          <option value="KZT">Kazakhstani Tenge</option>
          <option value="KES">Kenyan Shilling</option>
          <option value="KWD">Kuwaiti Dinar</option>
          <option value="KGS">Kyrgystani Som</option>
          <option value="LAK">Laotian Kip</option>
          <option value="LVL">Latvian Lats</option>
          <option value="LBP">Lebanese Pound</option>
          <option value="LSL">Lesotho Loti</option>
          <option value="LRD">Liberian Dollar</option>
          <option value="LYD">Libyan Dinar</option>
          <option value="LTL">Lithuanian Litas</option>
          <option value="MOP">Macanese Pataca</option>
          <option value="MKD">Macedonian Denar</option>
          <option value="MGA">Malagasy Ariary</option>
          <option value="MWK">Malawian Kwacha</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="MVR">Maldivian Rufiyaa</option>
          <option value="MRO">Mauritanian Ouguiya</option>
          <option value="MUR">Mauritian Rupee</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MDL">Moldovan Leu</option>
          <option value="MNT">Mongolian Tugrik</option>
          <option value="MAD">Moroccan Dirham</option>
          <option value="MZM">Mozambican Metical</option>
          <option value="MMK">Myanmar Kyat</option>
          <option value="NAD">Namibian Dollar</option>
          <option value="NPR">Nepalese Rupee</option>
          <option value="ANG">Netherlands Antillean Guilder</option>
          <option value="TWD">New Taiwan Dollar</option>
          <option value="NZD">New Zealand Dollar</option>
          <option value="NGN">Nigerian Naira</option>
          <option value="KPW">North Korean Won</option>
          <option value="NOK">Norwegian Krone</option>
          <option value="OMR">Omani Rial</option>
          <option value="PKR">Pakistani Rupee</option>
          <option value="PAB">Panamanian Balboa</option>
          <option value="PGK">Papua New Guinean Kina</option>
          <option value="PYG">Paraguayan Guarani</option>
          <option value="PEN">Peruvian Nuevo Sol</option>
          <option value="PHP">Philippine Peso</option>
          <option value="PLN">Polish Zloty</option>
          <option value="QAR">Qatari Rial</option>
          <option value="RON">Romanian Leu</option>
          <option value="RUB">Russian Ruble</option>
          <option value="RWF">Rwandan Franc</option>
          <option value="WST">Samoan Tala</option>
          <option value="SAR">Saudi Riyal</option>
          <option value="RSD">Serbian Dinar</option>
          <option value="SCR">Seychellois Rupee</option>
          <option value="SLL">Sierra Leonean Leone</option>
          <option value="SGD">Singapore Dollar</option>
          <option value="SKK">Slovak Koruna</option>
          <option value="SBD">Solomon Islands Dollar</option>
          <option value="SOS">Somali Shilling</option>
          <option value="ZAR">South African Rand</option>
          <option value="KRW">South Korean Won</option>
          <option value="XDR">Special Drawing Rights</option>
          <option value="LKR">Sri Lankan Rupee</option>
          <option value="SHP">St. Helena Pound</option>
          <option value="SDG">Sudanese Pound</option>
          <option value="SRD">Surinamese Dollar</option>
          <option value="SZL">Swazi Lilangeni</option>
          <option value="SEK">Swedish Krona</option>
          <option value="CHF">Swiss Franc</option>
          <option value="SYP">Syrian Pound</option>
          <option value="STD">São Tomé and Príncipe Dobra</option>
          <option value="TJS">Tajikistani Somoni</option>
          <option value="TZS">Tanzanian Shilling</option>
          <option value="THB">Thai Baht</option>
          <option value="TOP">Tongan pa'anga</option>
          <option value="TTD">Trinidad & Tobago Dollar</option>
          <option value="TND">Tunisian Dinar</option>
          <option value="TRY">Turkish Lira</option>
          <option value="TMT">Turkmenistani Manat</option>
          <option value="UGX">Ugandan Shilling</option>
          <option value="UAH">Ukrainian Hryvnia</option>
          <option value="AED">United Arab Emirates Dirham</option>
          <option value="UYU">Uruguayan Peso</option>
          <option value="USD">US Dollar</option>
          <option value="UZS">Uzbekistan Som</option>
          <option value="VUV">Vanuatu Vatu</option>
          <option value="VND">Vietnamese Dong</option>
          <option value="YER">Yemeni Rial</option>
          <option value="ZMK">Zambian Kwacha</option>
        </select>
        <pre></pre>
        <textarea v-model= "trip.imageURL" rows="1" cols="45" class="textarea1" placeholder = "Image URL"></textarea> 
        <p class="my-4"> {{ text }} </p>
      </ModalBody>
      <ModalFooter>
        <button @click="close('Modal closed')" class="btn btn-danger">Cancel</button>
        <button @click="dismiss('Modal dismissed'); editDestination();" class="btn btn-primary">Submit</button>
      </ModalFooter>
    </Modal>


  </template>
  
  <script>
  import axios from 'axios';
  import Modal from './Modal.vue';
  import ModalHeader from './ModalHeader.vue';
  import ModalFooter from './ModalFooter.vue';
  import ModalBody from './ModalBody.vue';
  import ModalMixin from './ModalMixin';
  import {EventBus} from '../main'
  export default {
    props: {
      text:String,
    },
    data() {
        return {
            trip: {
              id: null,
              name: null,
              kidFriendlyScore: null,
              foodQualityScore: null,
              weather: null,
              priceIndex: null,
              instagramAbilityScore: null,
              nativeLanguage: null,
              purpose: null,
              hotelQualityScore: null,
              recTripLength: null,
              country: null,
              continent: null,
              currency: null,
              attractionScore: null,
              safetyScore: null,
              popularity: null,
              imageURL: null,
            }
        };
    },
    created(){

      EventBus.$on("tripId", (data) => {
            this.tripId = data;
            
        });

    },
    mounted(){

      EventBus.$on("tripId", (data) => {
            this.tripId = data;
            
        });

    },
    methods: {

      editDestination(){

        this.trip.kidFriendlyScore = parseFloat(this.trip.kidFriendlyScore)
        this.trip.foodQualityScore = parseFloat(this.trip.foodQualityScore)
        this.trip.priceIndex = parseFloat(this.trip.priceIndex)
        this.trip.instagramAbilityScore = parseFloat(this.trip.instagramAbilityScore)
        this.trip.hotelQualityScore = parseFloat(this.trip.hotelQualityScore)
        this.trip.attractionScore = parseFloat(this.trip.attractionScore)
        this.trip.safetyScore = parseFloat(this.trip.safetyScore)
        this.trip.popularity = parseFloat(this.trip.popularity)

        // console.log(this.trip)
        EventBus.$emit('editDestination', this.trip);
      }

    },
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    mixins: [ModalMixin],
  }
  </script>

<style>

.textarea1 {
  resize: none;
  text-align: left;
}

</style>