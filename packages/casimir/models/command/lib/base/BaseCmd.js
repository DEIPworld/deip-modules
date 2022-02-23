import { assert } from '@deip/toolbox';
import { APP_CMD } from '@deip/constants';

/**
 * Class for base command
 */
class BaseCmd {
  /**
   * Create base command
   * @param {number} cmdNum
   * @param {Object} cmdPayload
   */
  constructor(cmdNum, cmdPayload) {
    assert(!!cmdNum, 'App command number is required');
    this._cmdNum = cmdNum;
    this._cmdPayload = cmdPayload;
  }

  /**
   * Get command number
   * @returns {number} Command number
   */
  getCmdNum() { return this._cmdNum; }

  /**
   * Get command name
   * @returns {string} Command name
   */
  getCmdName() { return APP_CMD[this._cmdNum]; }

  /**
   * Get command payload
   * @returns {Object} Command payload
   */
  getCmdPayload() { return this._cmdPayload; }

  /**
   * Is command protocol operation
   * @returns {boolean}
   */
  isProtocolOpCmd() { return BaseCmd.IsProtocolOpCmd(); }

  /**
   * Is command protocol operation
   * @returns {boolean}
   */
  static IsProtocolOpCmd() { return false; }

  /**
   * Serialize command
   * @returns {Object} result
   * @returns {number} result.CMD_NUM
   * @returns {string} result.CMD_PAYLOAD
   */
  serialize() { return BaseCmd.Serialize(this); }

  /**
   * Deserialize command
   * @param {Object} serialized
   * @returns {number} serialized.CMD_NUM
   * @returns {string} serialized.CMD_PAYLOAD
   * @returns {BaseCmd}
   */
  deserialize(serialized) { return BaseCmd.Deserialize(serialized); }

  /**
   * Serialize command
   * @param {BaseCmd} cmd
   * @returns {Object} result
   * @returns {number} result.CMD_NUM
   * @returns {string} result.CMD_PAYLOAD
   */
  static Serialize(cmd) {
    return {
      CMD_NUM: cmd.getCmdNum(),
      CMD_PAYLOAD: JSON.stringify(cmd.getCmdPayload())
    };
  }

  /**
   * Deserialize command
   * @param {Object} serialized
   * @returns {number} serialized.CMD_NUM
   * @returns {string} serialized.CMD_PAYLOAD
   * @returns {BaseCmd}
   */
  static Deserialize(serialized) {
    // eslint-disable-next-line global-require
    const { APP_CMD_INFO } = require('../serialization');
    const { CMD_NUM, CMD_PAYLOAD } = serialized;
    const CmdClass = APP_CMD_INFO[CMD_NUM].class;
    return new CmdClass(JSON.parse(CMD_PAYLOAD));
  }
}

export default BaseCmd;
