import React from 'react';
import './styles/Test.css'
import ProgressBar from './ProgressBar';

/**
 * Test Item component
 * @namespace TestItem
 * @param  {object} group
 * @param  {number} segment_population
 * @memberof TestComponent
 */
const TestItem = ({ group, segment_population }) => {
  return (
    <div className="testItem">
      <div className="testItemTitle">est. income > ${100}k/yr</div>
      <div className="testItemSubTitle">Est. Population</div>
      <div className="testItemProgress">
        <ProgressBar className="progressBar" color={'#5147FF'} totalValue={segment_population} progressValue={group.group_population} />
      </div>
      <div className="testItemResult">
        {/* Top Row */}
        <div className="row">
          <div className="col">
            <div>Home Oweners: </div>
            <div>{group.home_owner_population}</div>
          </div>
          <div className="col">
            <div>Renters: </div>
            <div>{group.renter_population}</div>
          </div>
        </div>
        {/* Bottom Row 1 */}
        <div className="row">
          <div className="col noGap">
            <div>Family: </div>
            <div>{group.family_home_owner_population}</div>
          </div>
          <div className="col noGap">
            <div>Family: </div>
            <div>{group.family_renter_population}</div>
          </div>
        </div>
        {/* Bottom Row 2 */}
        <div className="row">
          <div className="col">
            <div>Non Family: </div>
            <div>{group.nonfamily_home_owner_population}</div>
          </div>
          <div className="col">
            <div>Non Family: </div>
            <div className="colorWhite">{group.nonfamily_renter_population}</div>
          </div>
        </div>
        {/* Bottom Row Result */}
        <div className="row">
          <div className="col fullWidth noGap">
            <div>Est. Market Size: </div>
            <div className="totalPrice">{group.market_size}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * Test component
 * @param  {Array<object>} income_groups=[]
 * @param  {string} segment_age_group='NA'
 * @param  {number} segment_number
 * @param  {number} segment_population=0
 * @param  {number} total_population=0}
 * @memberof App
 */
const TestComponent = ({ income_groups = [], segment_age_group = 'NA', segment_number, segment_population = 0, total_population = 0 }) => {
  return (
    <div className="test">
      <div className="testHeader">
        <div style={{ 'float': 'left' }}>
          Segment {segment_number} | Age {segment_age_group}
        </div>
        <div style={{ 'float': 'right' }}>
          Segment {segment_population}/{total_population}
        </div>
      </div>
      <div className="testContainer">
        {Object.entries(income_groups).map((group, key) => <TestItem group={group[1]} index={group[0]} key={key} segment_population={segment_population} />)}
      </div>
    </div>
  );
}

export default TestComponent;
