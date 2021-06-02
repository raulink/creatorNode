/**
 * From queryman lib syntaxis (Check https://www.npmjs.com/package/bodymen)
 * Which could be use as validating fetching tool at controller or event at express
 * example of schema definitions:
 * attribute: {
 *   type: String,
 *   match: /^\S+@\S+\.\S+$/,
 *   required: true,
 *   unique: true,
 *   trim: true,
 *   lowercase: true,
 *   minlength: 6,
 *   enum: roles
 * }
 *
 */
export const lecturaDataSchema = {
        fkEquipo: 
   {  
       type:  Number,
       required: true 
   }, 
    fkCatPlanUni: 
   {  
       type:  Number,
       required: true 
   }, 
    fc_lect: 
   {  
       type:  Date,
       required: true 
   }, 
    lect_base: 
   {  
       type:  Number,
       required: true 
   }, 
    lect: 
   {  
       type:  Number,
       required: true 
   }, 
    es_ini_mes: 
   {  
       type:  Boolean,
       required: true 
   }, 
    es_lect_real: 
   {  
       type:  Boolean,
       required: true 
   }, 
    es_lect_1: 
   {  
       type:  Boolean,
       required: true 
   }, 
    es_lect_fuera_serv: 
   {  
       type:  Boolean,
       required: true 
   }, 
    lect_fin_mes: 
   {  
       type:  Number,
       required: true 
   }, 
    fd: 
   {  
       type:  String,
       required: true 
   }, 
    tipo_origen: 
   {  
       type:  Boolean,
       required: true 
   } 

}

/**
 * This method build usefull attr to be declared in many places as it could be necessary (migrations example)
 * @param {*} DataTypes From Sequelize instance
 */
export const lecturaAttributes = (DataTypes) => {
  return {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },    
      fkEquipo: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fkCatPlanUni: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fc_lect: 
   {  
       type:  DataTypes.DATE,
       allowNull: false 
   }, 
    lect_base: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    lect: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    es_ini_mes: 
   {  
       type:  DataTypes.BOOLEAN,
       allowNull: false 
   }, 
    es_lect_real: 
   {  
       type:  DataTypes.BOOLEAN,
       allowNull: false 
   }, 
    es_lect_1: 
   {  
       type:  DataTypes.BOOLEAN,
       allowNull: false 
   }, 
    es_lect_fuera_serv: 
   {  
       type:  DataTypes.BOOLEAN,
       allowNull: false 
   }, 
    lect_fin_mes: 
   {  
       type:  DataTypes.INTEGER,
       allowNull: false 
   }, 
    fd: 
   {  
       type:  DataTypes.STRING,
       allowNull: false 
   }, 
    tipo_origen: 
   {  
       type:  DataTypes.BOOLEAN,
       allowNull: false 
   } 
  
  }
}


/**
 * Sequelize model
 */
export default (sequelize, DataTypes) => {
  const lectura = sequelize.define('lectura', {
    ...lecturaAttributes(DataTypes)
  }, {
    tableName: 'lecturas',
    hooks: {
      /**
       * hooks methods from models recognize some
       * lifecycle hooks from the user model component
       * to execute some custom 'scripts' on them
       * (Check https://sequelize.org/master/manual/hooks.html)
       */
      beforeSave: async (user) => {
        // My before save logic
      }
    }
  });

  lectura.associate = function(models) {
    /**
     * An example of association is the follow
     * Guess lectura has a collection of cookies table.
     * At the same time, cookies just saves one reference 
     * (foreign key) to it's lectura's
     * 
     *   models.lectura.hasMany(models.cookie, {
     *     as: 'cookies', allowNull: true
     *   }, {
     *     onDelete: 'CASCADE',
     *     hooks: true
     *   })
     * 
     * At cookie.model.js must be declared the reference to it's lectura owner 
     * on associate function as follow:
     * 
     *   models.cookie.belongsTo(models.lectura, {
     *     foreignKey: 'lecturaId',
     *     allowNull: true
     *   })
     * 
     * 
     */
  };

  return lectura;
}



  