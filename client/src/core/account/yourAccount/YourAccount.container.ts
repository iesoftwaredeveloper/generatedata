import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as selectors from '~store/generator/generator.selectors';
import * as accountSelectors from '~store/account/account.selectors';
import * as accountActions from '~store/account/account.actions';
import YourAccount, { YourAccountProps } from './YourAccount.component';
import { Store } from '~types/general';

const mapStateToProps = (state: Store): Partial<YourAccountProps> => ({
	data: accountSelectors.getEditingData(state),
	numGeneratedRows: accountSelectors.getNumGeneratedRows(state),
	i18n: selectors.getCoreI18n(state)
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<YourAccountProps> => ({
	// @ts-ignore-line
	updateAccount: (): any => dispatch(accountActions.updateAccount())
});

const container: any = connect(
	mapStateToProps,
	mapDispatchToProps
)(YourAccount);

export default container;