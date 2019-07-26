/**
 * User controller handles all requests that has to do with user
 * Some methods needs to be implemented from scratch while others may contain one or two bugs
 * 
 * - create - allow customers to create a new account
 */
import { User } from '../database/models';

/**
 *
 *
 * @class CustomerController
 */
class UserController {
  /**
   * create a customer record
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, customer data and access token
   * @memberof UserController
   */
  static async create(req, res, next) {
    // Implement the function to create the customer account
    return res.status(201).json({ message: 'this works' });
  }

  /**
   * log in a customer
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status, and access token
   * @memberof UserController
   */
  static async login(req, res, next) {
    // implement function to login to user account
    return res.status(200).json({ message: 'this works' });
  }

  /**
   * get customer profile data
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status customer profile data
   * @memberof UserController
   */
  static async getUserProfile(req, res, next) {
    // fix the bugs in this code
    const { user_id } = req.user;  // eslint-disable-line
    try {
      const user = await User.findByPk(user_id);
      return res.status(400).json({
        status: true,
        user,
      });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * update customer profile data such as name, email, password, day_phone, eve_phone and mob_phone
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status customer profile data
   * @memberof UserController
   */
  static async updateUserProfile(req, res, next) {
    // Implement function to update customer profile like name, marital_status, gender, age_range, occupation day_phone, eve_phone and mob_phone
    return res.status(200).json({ message: 'this works' });
  }

  /**
   * update customer profile data such as address_1, address_2, city, region, postal_code, country and shipping_region_id
   *
   * @static
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status customer profile data
   * @memberof UserController
   */
  static async updateUserAddress(req, res, next) {
    // write code to update customer address info such as address_1, address_2, city, region, postal_code, country
    // and shipping_region_id
    return res.status(200).json({ message: 'this works' });
  }

  static async addUserBirthday(req, res, next){}

  static async addUserWeddingAnniversary(req, res, next){}
}

export default UserController;
