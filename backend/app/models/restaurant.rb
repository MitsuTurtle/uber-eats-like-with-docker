# frozen_string_literal: true

# == Schema Information
#
# Table name: restaurants
#
#  id            :bigint           not null, primary key
#  fee           :integer          default(0), not null
#  name          :string(255)      not null
#  time_required :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :foods

  DEFAULT_NAME_LENGTH = 30

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: DEFAULT_NAME_LENGTH }
  validates :fee, numericality: { greater_than: 0 }
end
