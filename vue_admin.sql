/*
 Navicat Premium Data Transfer

 Source Server         : Alpine
 Source Server Type    : MariaDB
 Source Server Version : 100219
 Source Host           : 192.168.1.3:3306
 Source Schema         : vue_admin

 Target Server Type    : MariaDB
 Target Server Version : 100219
 File Encoding         : 65001

 Date: 25/02/2019 01:03:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for v_menus
-- ----------------------------
DROP TABLE IF EXISTS `v_menus`;
CREATE TABLE `v_menus`  (
  `id` int(128) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pid` int(128) NOT NULL COMMENT '父级ID',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '路由Path',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单名字',
  `roles` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '[meta]允许访问的roles，是一个序列化后的数组',
  `application` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '[meta]应用',
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组件',
  `disabled` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否被禁用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of v_menus
-- ----------------------------
INSERT INTO `v_menus` VALUES (1, 0, '/users', '用户管理', 'a:2:{i:0;s:5:\"admin\";i:1;s:7:\"manager\";}', 'admin', NULL, 0);

-- ----------------------------
-- Table structure for v_metas
-- ----------------------------
DROP TABLE IF EXISTS `v_metas`;
CREATE TABLE `v_metas`  (
  `id` int(128) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `table_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '表名',
  `foreign_key` int(128) NOT NULL COMMENT '外键',
  `meta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '扩展名',
  `value` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '扩展值',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for v_options
-- ----------------------------
DROP TABLE IF EXISTS `v_options`;
CREATE TABLE `v_options`  (
  `user` int(128) NOT NULL DEFAULT 0 COMMENT 'user id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'key',
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'value'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of v_options
-- ----------------------------
INSERT INTO `v_options` VALUES (0, 'application', 'admin');

SET FOREIGN_KEY_CHECKS = 1;
