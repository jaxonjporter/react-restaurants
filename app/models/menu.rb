class Menu < ApplicationRecord
  has_many :foods, dependent: :destroy
end
